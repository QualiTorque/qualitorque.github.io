---
sidebar_position: 8
title: Terraform Authentication on AKS
---

If you're using an AKS cluster as your execution host, and you want to run Terraform that deploys resources on AKS, you can use a  pod managed identity to do the authentication and permissions between the pod and the Azure account where the resources will be created.

The basic process is as follows:
* [Configure the pod managed identity](#configure-the-pod-managed-identity)
* [Configure Torque's Terraform authentication on AKS](#configure-torques-terraform-authentication-on-aks)

## Configure the pod managed identity
In this procedure, you will attach a Torque Terraform runner pod to a managed identity.

__Prerequisites__:
* Azure CLI installed locally or use Azure CLI in Azure portal


__To configure the pod managed identity__:

1. Update azure cli:
  ```jsx title=
  az update
  ```

2.	Register the EnablePodIdentityPreview feature: 
  ```jsx title=
  az feature register --name EnablePodIdentityPreview --namespace Microsoft.ContainerService
  ```

3.	Install the aks-preview Azure CLI:
  ```jsx title=
  az extension add --name aks-preview
  az extension update --name aks-preview
  ```

4.	Add Azure Container Networking Interface (CNI) to AKS.
  
    * If you don’t have AKS then create one with azure CNI:

      ```jsx title=
      az group create --name myResourceGroup --location eastus
      az aks create -g myResourceGroup -n myAKSCluster --enable-pod-identity --network-plugin azure
      ```

     * If you have an existing AKS then update it with Azure CNI:
       ```jsx title=
       az aks update -g $MY_RESOURCE_GROUP -n $MY_CLUSTER --enable-pod-identity
       ```

5.	Create identity:
  ```jsx title=
  az group create --name myIdentityResourceGroup --location eastus
  export IDENTITY_RESOURCE_GROUP="myIdentityResourceGroup"
  export IDENTITY_NAME="application-identity"
  az identity create --resource-group ${IDENTITY_RESOURCE_GROUP} --name ${IDENTITY_NAME}
  export IDENTITY_CLIENT_ID="$(az identity show -g ${IDENTITY_RESOURCE_GROUP} -n ${IDENTITY_NAME} --query clientId -otsv)"
  export IDENTITY_RESOURCE_ID="$(az identity show -g ${IDENTITY_RESOURCE_GROUP} -n ${IDENTITY_NAME} --query id -otsv)"
  ```

6.	Add contributor permissions to the managed identity at the subscription level using azure portal (or the required permissions for TF to deploy the resources in azure):

  a. Go to the __Subscriptions__ page (type in the search box “subscriptions”).

  b. Click the appropriate subscription.

  c. Select __Access Control (IAM)__.

  d. Click __+ Add__ and select __Add role assignment__.

  e. Select __Contributor__ and click __Next__.

  f. In the __Members__ page, select the __User, group or service principle__ option and click the __+ Select members__ link.

  g. Use the search bar to find and select the managed identity. Then, click __Select__.

7.	Create a pod identity in the sandbox namespace, if you don’t have one the choose/create a namespace for the sandboxes:
  ```jsx title=
  export POD_IDENTITY_NAME="my-pod-identity"
  export POD_IDENTITY_NAMESPACE="<sandbox_namespace>"
  az aks pod-identity add --resource-group myResourceGroup --cluster-name myAKSCluster --namespace ${POD_IDENTITY_NAMESPACE}  --name ${POD_IDENTITY_NAME} --identity-resource-id ${IDENTITY_RESOURCE_ID}
  ```

8.	Once the pod identity is created, Azure will create an AzureIdentity resource in your cluster. This resource represents the identity in Azure, and an AzureIdentityBinding resource, which connects the AzureIdentity to a selector. You can view these resources with the following commands:
  ```jsx title=
  kubectl get azureidentity -n $POD_IDENTITY_NAMESPACE
  kubectl get azureidentitybinding -n $POD_IDENTITY_NAMESPACE
  ```

9.	Get the aadpodidbinding pod label, which is needed to support Terraform authentication on AKS: 

  To use AAD pod-managed identity, the pod needs an aadpodidbinding label with a value that matches a selector from a AzureIdentityBinding. By default, the selector matches the name of the pod identity, but you can also set it using the ```--binding-selector``` option when calling ```az aks pod-identity add```.

## Configure Torque's Terraform authentication on AKS

__Prerequisites__:
* Subscription ID.
* Tenant ID.
* Managed identity ID – ID of the managed identity who is configured with pod managed identity, the ID is known as client ID.
* Azure identity binding selector – The selector value of the AzureIdentityBinding entity, this value will be used as a label for the Terraform runner pod, thus creating the binding between the pod and the managed identity.

There are 2 ways to provide these details:
1.	Adding AKS: When adding a new AKS, the Azure user can provide these details under __Default credentials__.

2.	Blueprint: The Torque user can override the default credentials defined in the AKS, or create one no credentials were supplied.

  a. Under ```env-vars``` of the Terraform grain add the following:

    ```jsx title=
    ARM_USE_MSI: true
    ARM_SUBSCRIPTION_ID: <Subscription_ID>
    ARM_TENANT_ID: <Tenant_ID>
    ARM_CLIENT_ID: <Client_ID>
  ```

  b. In the Terraform grain, specify the pod's identity name under ```spec``` > ```host```:

  ```jsx title=
    spec:
      source:
        ...
      namespace:
      host:
        kubernetes:
          pod-labels:
          - aadpodidbinding: <pod-identity-name>
    ```

  As you can see, we added a new section called “kubernetes” for all Kubernetes configurations, which includes ```pod-labels```. Any values provided under ```pod-labels``` will be used as labels for the Terraform runner pod. See the following blueprint YAML as an example:

 ```jsx title=
  spec_version: 2

  description: Azure RG.

  inputs:
    host_name:
      type: string
      display-style: normal

  grains:
    azure_resource_group:
      kind: terraform
      spec:
        source:
          store: terraform_repo
          path: terraform/azure-RG
        host:
          name: '{{ .inputs.host_name }}'
          kubernetes:
            pod-labels:
            - aadpodidbinding: my-pod-identity
        env-vars: 
        - ARM_USE_MSI: true
        - ARM_SUBSCRIPTION_ID: 0d266a1e-f6w3-4ec5-96a1-061539f16j32
        - ARM_TENANT_ID: a2526a87-7777-4f7c-95gt-4f0f57136553
        - ARM_CLIENT_ID: 108e6546-da2c-46ab-b00a-4fe987d33657
        tf-version: 1.2.3
    ```
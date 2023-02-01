---
sidebar_position: 8
title: Terraform AKS Authentication
---


If you're using an AKS cluster as your agent, and you want to run Terraform that deploys resources on Azure, you can use a Azure Workload Identity (valid for AKS clusters version 1.22+) that allows the cluster to securely authenticate with Azure using K8s service account and an Open ID connect (OIDC) token.
For a step-by-step tutorial, see [Video: Connecting a new agent and using it in a blueprint](#video-connecting-a-new-agent-and-using-it-in-a-blueprint).

The basic process is as follows:
- [__Azure Configuration__](#azure-configuration)
  - [__Prerequisites__](#prerequisites)
  - [__Configure the Azure Workload Identity__](#configure-the-azure-workload-identity)
- [__Torque Configuration__](#torque-configuration)
  - [__Prerequisites__](#prerequisites-1)
  - [__Configure the AKS authentication in Torque__](#configure-the-aks-authentication-in-torque)

## __Azure Configuration__

### __Prerequisites__
1. Azure CLI installed locally or use Azure CLI in Azure portal
    * If not installed: Download the MSI from https://aka.ms/installazurecliwindows and run the installer.
    * Update to latest:  
      ```jsx title=
      az upgrade
      ```
2. Install aks-preview Azure CLI extension and update extension to latest:
  
  ```jsx title=
  az extension add --name aks-preview
  az extension update --name aks-preview
  ```
3. Command-line with [kubectl installed](https://kubernetes.io/docs/tasks/tools/#kubectl) connected the cluster where you installed the Torque agent.
  To connect to the cluster use: 
  
  ```jsx title=
  kubectl config use-context <your-cluster>
  ```

### __Configure the Azure Workload Identity__

1.  Set CLI context to the Azure Subscription the AKS cluster is in:
  ```jsx title=
  az account set --subscription (subscription name or ID)
  ```

2.  Enable WorkloadIdentity feature on Azure Subscription:
  ```jsx title=
  az feature register --namespace "Microsoft.ContainerService" --name "EnableWorkloadIdentityPreview"
  ```

  :::tip
  This step may take 10-20 minutes until it is in effect, use the below command to check the state of the registration until it says "Registered"
  :::

3.  Check registration status:
  ```jsx title=
  az feature show --namespace "Microsoft.ContainerService" --name "EnableWorkloadIdentityPreview"
  ```

4.  Propogate registration:
  ```jsx title=
  az provider register --namespace Microsoft.ContainerService
  ```

5.  Update the AKS cluster to enable OIDC and Workload Identity:
  ```jsx title=
  az aks update -g {aks_resource_group_name} -n {aks_cluster_name} --enable-oidc-issuer --enable-workload-identity  
  ```

  __Copy the "issuerURl" from the response to this command to a note for use later as OIDC_ISSUER_URL.__

1.  Create a managed identity and grant permissions:
  ```jsx title=
  az identity create --name {Managed_Identity_Name} --resource-group {AKS_Resource_Group_Name} --location {resource_group_location} --subscription {aks_cluster_subscription_id}
  ```

  __Copy the Managed Identity's name and "client id" to a note for use later.__

7.	Add permissions to the managed identity at the subscription level using azure portal (this example uses the "contributor" role. You can select a different role, that has enough permissions to run your terraform modules):
 
 > a. Go to the __Subscriptions__ page (type in the search box “subscriptions”).
 >
 > b. Click the appropriate subscription.
 >
 > c. Select __Access Control (IAM)__.
 >
 > d. Click __+ Add__ and select __Add role assignment__.
 >
 > e. Select __Contributor__ and click __Next__.
 >
 > f. In the __Members__ page, select the __User, group or service principle__ option and click the __+ Select members__ link.
 >
 > g. Use the search bar to find and select the managed identity. Then, click __Select__.
 >
 > h. Click __Create__ to create the role assignment.

8. Create a file called aks_workload_id_service_account.yaml with the below content:

  :::tip
  Replace the {property name} with the corresponding values. For service account name, choose a new name. Take a note of the namespace that you select for Torque Environments (it will be in use in the next part - Torque configuration)
  :::
 
  ```jsx title=
  apiVersion: v1
  kind: ServiceAccount
  metadata:
    annotations:
      azure.workload.identity/client-id: {Managed_Identity_Client_ID}
    labels:
      azure.workload.identity/use: "true"
    name: {New_Service_Account_Name}
    namespace: {Torque_Environments_K8s_Namespace} 
  ```

9. Apply the file on your AKS Cluster

  ```jsx title=
  kubectl apply -f {path_to_file}\aks_workload_id_service_account.yaml  
  ```

10. Establish federated identity credential (Allow the AKS Cluster's OIDC provider access to the Managed Identity via the service account)

  ```jsx title=
  az identity federated-credential create --name {federated_credential_name} --identity-name {managed_identity_name} --resource-group {managed_identity_resource_group} --issuer {AKS_cluster_OIDC_issuer_URL} --subject system:serviceaccount:{Torque_Environments_K8s_namespace}:{service_account_name}
  ```

## __Torque Configuration__

### __Prerequisites__

Have the following formation ready (from the previous section)

* Tenant ID (displayed in the __Azure Active Directory > Overview__)
* Subscription ID
* The namespace where the Torque environments will run (which you chose previously) and the service account name (which you also created in the previous step).

### __Configure the AKS authentication in Torque__ 

There are 2 ways to acomplish this:

1. (Recommended) When adding a new AKS agent, you can provide the **default tenant Id**, and when attaching it a space you can provide the **default_subscription**.

  a. From the **Administration** menu, select **Cloud Accounts** and then **Connect a Cloud**.
  
  b. Choose "Azure" then "AKS" and fill the information:
   > ![Locale Dropdown](/img/AKS-doc-2.png)

  c. __Generate__ the "kubectl apply" command and run it in Azure CLI.
    > ![Locale Dropdown](/img/AKS-doc-2-a.png)

  d. Return to Torque and wait for the connection status to change to a green "Connected!".
   > ![Locale Dropdown](/img/AKS-doc-3.png)

  d. Click **Associate to Space** and connect the agent to one or more spaces. Select the namespace and the service account you configured in the previous step.
     > ![Locale Dropdown](/img/AKS-doc-4.png)


2. You may override the default credentials defined for the AKS agent, or define the credentials if no credentials were configured as the default.
  a. In the Terraform grain, specify the service-account name under spec > host:
    ```jsx title=
  spec:
    source:
      ...
    namespace:
    host:
      name: {aks_torque_agent_name}
      service account: {new_service_account_name} # this is the k8s service account created above    
  ```
  b. Under ```env-vars```, add the following (will override the default definition of the AKS agent):
    ```jsx title=
  ARM_SUBSCRIPTION_ID: <Subscription_ID>
  ARM_TENANT_ID: <Tenant_ID>
  ARM_CLIENT_ID: <Client_ID>

## Video: Connecting a new agent and using it in a blueprint
<video controls width="75%">
  <source src="/img/connect azure agent.mp4"/>
</video>

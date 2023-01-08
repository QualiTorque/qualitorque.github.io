---
sidebar_position: 8
title: Terraform AKS Authentication
---


If you're using an AKS cluster as your execution host, and you want to run Terraform that deploys resources on Azure, you can use a Azure Workload Identity (valid for AKS clusters version 1.22+) that allows the cluster to securely authenticate with Azure using K8s service account and an Open ID connect (OIDC) token.

The basic process is as follows:

* [Azure Configuration](#azure-configuration)
  * [Prerequisites](#prerequisites)
  * [Configure the Azure Workload Identity](#configure-the-azure-workload-identity)
* [Torque Configuration](#torque-configuration)
  * [Prerequisites](#prerequisites-1)
  * [Configure the AKS authentication in Torque](#configure-the-aks-authentication-in-torque)

## Azure Configuration

### Prerequisites

* Azure CLI installed locally or use Azure CLI in Azure portal
  * If not installed: Download the MSI from https://aka.ms/installazurecliwindows and run the installer.
Update to latest:
  ```jsx title=
az upgrade

2. Install aks-preview Azure CLI extension and update extension to latest:
  ```jsx title=
az extension add --name aks-preview
az extension update --name aks-preview

3. Command-line with kubectl installed connected the cluster where you installed the Torque agent. To connect to the cluster use:
  ```jsx title=
kubectl config use-context <your-cluster>


### Configure the Azure Workload Identity

1. Set CLI context to the Azure Subscription the AKS cluster is in:
  ```jsx title=
az account set --subscription (subscription name or ID)

2. Enable WorkloadIdentity feature on Azure Subscription:
  ```jsx title=
az feature register --namespace "Microsoft.ContainerService" --name "EnableWorkloadIdentityPreview"

TIP
This step may take 10-20 minutes until it is in effect, use the below command to check the state of the registration until it says "Registered"

3. Check registration status:
  ```jsx title=
az feature show --namespace "Microsoft.ContainerService" --name "EnableWorkloadIdentityPreview"

4. Propogate registration:
  ```jsx title=
az provider register --namespace Microsoft.ContainerService

5. Update the AKS cluster to enable OIDC and Workload Identity:
  ```jsx title=
az aks update -g {aks_resource_group_name} -n {aks_cluster_name} --enable-oidc-issuer --enable-workload-identity  

6. Copy the "issuerURl" from the response to this command to a note for use later as OIDC_ISSUER_URL.

7. Create a managed identity and grant permissions:
  ```jsx title=
az identity create --name {Managed_Identity_Name} --resource-group {AKS_Resource_Group_Name} --location {resource_group_location} --subscription {aks_cluster_subscription_id}

8. Copy the Managed Identity's name and "client id" to a note for use later.

9. Add permissions to the managed identity at the subscription level using Azure portal (this example uses the "contributor" role. You can select a different role, that has enough permissions to run your terraform modules):

  a. Go to the **Subscriptions** page (type in the search box “subscriptions”).

  b. Click the appropriate subscription.

  c. Select **Access Control (IAM)**.

  d. Click **+ Add** and select **Add role assignment**.

  e. Select **Contributor** and click **Next**.

  f. In the **Members** page, select the **User, group or service principle** option and click the *+ Select members* link.

  g. Use the search bar to find and select the managed identity. Then, click **Select**.

  h. Click **Create** to create the role assignment.

10. Create a file called **_aks_workload_id_service_account.yaml_** with the below content:

NOTE
Replace the {property name} with the corresponding values.

For service account name, choose a new name.

Take a note of the namespace that you select for Torque Environments (it will be in use in the next part - Torque configuration)

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
11. Apply the file on your AKS Cluster
  ```jsx title=
kubectl apply -f {path_to_file}\aks_workload_id_service_account.yaml  

12. Establish federated identity credential (Allow the AKS Cluster's OIDC provider access to the Managed Identity via the service account)
  ```jsx title=
az identity federated-credential create --name {federated_credential_name} --identity-name {managed_identity_name} --resource-group {managed_identity_resource_group} --issuer {AKS_cluster_OIDC_issuer_URL} --subject system:serviceaccount:{Torque_Environments_K8s_namespace}:{service_account_name}

## Torque Configuration

### Prerequisites
* Have the following formation ready (from the previous section)
  * Tenant ID (displayed in **Azure Active Directory > Overview**)
  * Subscription ID
  * The namespace where the Torque environments will run (which you chose previously) and the service account name (which you also created in the previous step).

### Configure the AKS authentication in Torque
                                                                    
 There are 2 ways to acomplish this:

1. (Recommended) When adding a new AKS agent, you can provide the **default tenant Id**, and when attaching it a space you can provide the **default_subscription**.

  a. From the **Administration** menu, select **Cloud Accounts** and then **Connect a Cloud**.
  
  b. Choose "Azure" then "AKS" and fill the information:
   > ![Locale Dropdown](/img/AKS-doc-2.png)

  c. Generate the "kubectl apply" command and run it in Azure CLI.
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

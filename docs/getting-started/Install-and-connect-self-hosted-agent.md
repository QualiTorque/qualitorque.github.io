---
sidebar_position: 9
title: Install and connect a self hosted agent on your K8s cluster
---

## Prerequisites

- Kuberentes cluster - can be any cluster, including on your on-premise network. Please note that Torque __does not support__ cluster nodes on ARM architecture.
- [Outbound Ports for Kubernetes Cluster Nodes](/misc/torque-outbound-ports) must be open to allow Torque to access and communicate with the cluster.
- Command-line with [kubectl installed](https://kubernetes.io/docs/tasks/tools/#kubectl) connected to your cluster.
  To connect to the cluster use: 
  
  ```jsx title=
  kubectl config use-context <your-cluster>
  ```

  For further reading on connecting to clusters hosted on your cloud, check these links: [EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html), [AKS](https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az-aks-get-credentials), [GKE](https://cloud.google.com/sdk/gcloud/reference/container/clusters/get-credentials).
    
- One or more target namespaces on the cluster where the Torque agent will create resources.
   
- Authentication and permissions - The agent will need sufficient permissions to create the environment's cloud resources. There are a couple of ways to provide the permissions, depending on where the environment resources will be created. 
  - To create K8s resources (Pods, services, secrets... etc.) using K8s manifests or helm charts, create a service account with sufficient permissions to create the K8s resources. 
    For Example:

    Let's say that you would like to deploy your environments into a namespace called "my-ns". 
    Use the below commands (change to your real namespace name) to create the appropriate service-account:

    ```jsx title=
    kubectl create serviceaccount my-ns-edit-sa --namespace=my-ns
    ```
    ```jsx title=
    kubectl create rolebinding my-sa-edit-rb --clusterrole=edit --serviceaccount=my-ns:my-ns-edit-sa --namespace=my-ns
    ```

  - To create resources on your cloud using Terraform:
      - if your cluster is an __EKS__ (resources will be created on AWS):
        - (Recommended) Create a designated __service account__ annotated with an AWS role. See [Terraform Authentication on EKS](/authentication/service-accounts-for-aws) for details. Or,
        - Ensure that the Cluster service role has sufficient permissions to create the environment.
      - if your cluster is an __AKS__ (resources will be created on Azure): Provide the account's authentication credentials when creating the agent in Torque. For details, see [Terraform Authentication on AKS](/authentication/service-accounts-for-azure).
      - If your cluster is a __GKE__ (resources will be createdon GCP), see [Terraform GKE Authentication](/authentication/service-accounts-for-gcp).
      - For other types of clusters, or if you want to connect to your AWS/Azure with your basic credentials, there is no built-in authentication with Torque so there are no pre-requisites related to authentication and permissions. You can store your cloud credentials in the Torque secret store and use them for your TF deployment.

## Setup


1. In Torque's **Administration** page, open the **Cloud Accounts** tab.
2. Click **Connect a Cloud**.
3. Select the cloud provider and the type of Kubernetes to use, and give the agent a name. 
   > ![Locale Dropdown](/img/add-k8s-wizard.png)
3. Click __Next__. 
4. Click __Generate__ and copy the command that is displayed
5. Paste the command in your command-line window to deploy the agent to your cluster. For example:     
     ```jsx title=
    kubectl apply -f https://portal.qtorque.io/api/settings/executionhosts/deployment/k***roi/deployment.yaml
    ```
5. A __Connected!__ status is displayed in Torque, indicating that the agent was successfully installed and can communicate with Torque. 
    > ![Locale Dropdown](/img/agent-connected-status.png)
6. Click __Associate to Space__ to connect the host to a space, and provide the details you obtained in the prerequisites section.
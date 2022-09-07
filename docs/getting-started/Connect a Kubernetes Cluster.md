---
sidebar_position: 9
title: Connect a Kubernetes Cluster
---


## Kubernetes host architecture

> ![Locale Dropdown](/img/k8s-host-architecture.png)

## Prerequisites

- Kuberentes cluster
- Command-line connected to your cluster with [kubectl installed](https://kubernetes.io/docs/tasks/tools/#kubectl)
   
- **Namespace** - A namespace on the cluster where the Torque agent will create resources.
   
- **Authentication and permissions** - The execution host will need sufficient permissions to create the environment's cloud resources. There are a couple of ways to provide the permissions, depending on where the environment resources will be created. 
  - For Helm/kubernetes create a service account with sufficient permissions to create the K8s resources.
    Example:
  - For Terraform:
      - __EKS__ (resources will be created on AWS):
        - (Recommended) Create a designated __service account__ with the required permissions, and specify it in the blueprint. See [Terraform Authentication on EKS](/blueprint-designer-guide/service-accounts-for-aws) for details. Or,
        - Ensure that the Cluster service role has sufficient permissions to create the environment. Or,
      - __AKS__ (resources will be created on Azure): Provide the account's authentication credentials when creating the execution host in Torque. For details, see [Terraform Authentication on AKS](/blueprint-designer-guide/service-accounts-for-azure).
      - __vCenter__: For vCenter execution hosts, you will need to install Torque Agent on the cluster. When creating the vCenter execution host, Torque will provide you with the Torque Agent zip file, extract it to the cluster and run the __deploy_torque_agent.sh__ file from the extracted.

## Setup


1. In Torque's **Admin Console** page, open the **Cloud Accounts** tab.
2. Click **Add Cloud Account** and complete the wizard with the information you collected before. 
   > ![Locale Dropdown](/img/add-k8s-wizard.png)
3. Fill in the information and click __Next__. 
4. Click __Generate__ and copy the command that is displayed
5. Paste the command in your command-line window to deploy the agent to your cluster. For example:     
     ```jsx title=
    kubectl apply -f https://portal.qtorque.io/api/settings/executionhosts/deployment/k***roi/deployment.yaml
    ```
5. Click __Check Connectivity__ to verify that the agent can sucessfully communicate with Torque. 
6. Once verified, click **Finish** in the window that pops up.

---
sidebar_position: 9
title: Connect a Kubernetes Cluster
---


## Kubernetes host architecture

> ![Locale Dropdown](/img/k8s-host-architecture.png)

## Prerequisites

- Have a Kuberentes cluster ready with kubectl available.
   
- **Namespace** - A namespace on the cluster where the Torque agent will create resources.
   
- **Authentication and permissions** - The execution host will need sufficient permissions to create the environment's cloud resources. There are a couple of ways to provide the permissions, depending on where the environment resources will be created.

  - __AWS__: For Terraform deployments, if the resources will be created on your AWS account, there are number of options for the authentication:
    - (Recommended) Create a designated __service account__ with the required permissions, and specify it in the blueprint. See [Service Accounts](/blueprint-designer-guide/Service%20Accounts) for details. Or,
    - Ensure that the Cluster service role has sufficient permissions to create the environment. Or,
    - Create a custom script that executes the authentication, and design your environment to execute it before the environment is created. 
   
  - __Azure__: For Azure execution hosts, you will need to pass the account's authentication credentials when creating the execution host in Torque. For details, see [Terraform Authentication on EKS](/blueprint-designer-guide/service-accounts-for-azure).

  - __vCenter__: For vCenter execution hosts, you will need to install Torque Agent on the cluster. When creating the vCenter execution host, Torque will provide you with the Torque Agent zip file, extract it to the cluster and run the __deploy_torque_agent.sh__ file from the extracted.

## Setup


1. Make sure you are in Torque's **Admin Console** page, in the **Cloud Accounts** tab.
2. Click **Add Cloud Account** and complete the wizard with the information you collected before. 
   > ![Locale Dropdown](/img/add-k8s-wizard.png)
3. Once you've filled in the information, Torque will generate the agent's *deployment file*. Copy the file's contents and save it locally. 
4. Deploy the agent to your cluster as follows:  
   ``` kubectl apply -f <file-name> ```

5. Click __Check Connectivity__ to verify that the agent can sucessfully communicate with Torque. 
6. Once verified, click **Finish** in the window that pops up.

---
sidebar_position: 7
title: Connect a Kubernetes Cluster
---


## Kubernetes host architecture

> ![Locale Dropdown](/img/k8s-host-architecture.png)

## Prerequisites

- Have a Kuberentes cluster ready with kubectl available.
   
- **Agent namespace** - To communicate with the cluster, install the *Torque agent* on your cluster. Create a namespace for the agent and keep note of the name as you will need it in when you connect the cluster to Torque.
   
- **Sandbox namespaces** - If your environments will deploy Kubernetes resources (pods, services, etc...), create namespaces where the resources will be created (or have a list of namespaces ready). You will need the names of the namespaces when you connect the cluster to Torque. Note, every space will be attached to one namespace. If you're using the Kubernetes cluster just as a host and don't plan on deploying resources to other namespaces, you can specify the agent namespace as an environment namespace.
   
- **Authentication and permissions** - The execution host will need sufficient permissions to create the environment's cloud resources. There are a couple of ways to provide the permissions, depending on where the environment resources will be created.

  *Kubernetes cluster*

  If the resources will be created on the same Kubernetes cluster, Create a designated *service account* with the required permissions, and specify it in the blueprint. See [Service Accounts](/blueprint-designer-guide/Service%20Accounts) for details. 

  *AWS*

  If the resources will be created on your AWS account, there are number of options for the authentication:
    - (Recommended) Create a designated *service account* with the required permissions, and specify it in the blueprint. See [Service Accounts](/blueprint-designer-guide/Service%20Accounts) for details. Or,
    - Ensure that the Cluster service role has sufficient permissions to create the environment. Or,
    - Create a custom script that executes the authentication, and design your environment to execute it before the environment is created. 
   

## Setup


1. Make sure you are in Torque's **Admin Console** page, in the **Cloud Accounts** tab.
2. Click **Add Cloud Account** and complete the wizard with the information you collected before. 
   > ![Locale Dropdown](/img/add-k8s-wizard.png)
3. Once you've filled in the information, Torque will generate the agent's *deployment file*. Copy the file's contents and save it locally. 
4. Deploy the agent to your cluster as follows:  
   ``` kubectl apply -f <file-name> ```

5. Click __Check Connectivity__ to verify that the agent can sucessfully communicate with Torque. 
6. Once verified, click **Finish** in the window that pops up.

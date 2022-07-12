---
sidebar_position: 7
title: Connect a Kubernetes Cluster
---


## Kubernetes host architecture

> ![Locale Dropdown](/img/k8s-host-architecture.png)

## Prerequisites

- Have a Kuberentes cluster ready with kubectl available.
   
- **Agent namespace** - To communicate with the cluster, install the *Torque agent* on your cluster. Create a namespace for the agent and keep note of the name as you will need it in when you connect the cluster to Torque.
   
- **Sandboxes namespaces** - If your environments will deploy Kubernetes resources (pods, services, etc...), create namespaces where the resources will be created (or have a list of namespaces ready). You will need the names of the namespaces when you connect the cluster. Note, every space will be attached to one namespace. If you're using the Kubernetes cluster just as a host and don't plan on deploying resources to other namespaces, you can specify the agent namespace as a sandbox namespace.
   
- **Authentication and permissions** - The execution host will need sufficient permissions to create the environment's cloud resources. There are a couple of ways to provide the permissions:
   - (Recommended) Create a designated *service account* with the required permissions, and specify it in the blueprint. See [Service Accounts](/blueprint-designer-guide/Service%20Accounts)  for details. 
   - Create a custom script that executes the authentication, and design your sandbox to execute it before the environment is created. See [TBD] for details.
   

## Setup


1. Make sure you are in Torque's **Admin Console** page, in the **Cloud Accounts** tab.
2. Click **Add Cloud Account** and complete the wizard with the information you collected before. 
   > ![Locale Dropdown](/img/add-k8s-wizard.png)
3. Once you've filled in the information, Torque will generate the agent's *deployment file*. Copy the file's contents and save it locally. 
4. Deploy the agent to your cluster as follows:  
   ``` kubectl apply -f <file-name> ```
5. Click __Check Connectivity__ to verify that the agent can sucessfully communicate with Torque. 
6. Once verified, click **Finish** in the window that pops up.
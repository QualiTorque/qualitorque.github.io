---
sidebar_position: 7
title: Create a Kubernetes Cluster
---


## Kubernetes Host Architecture

> ![Locale Dropdown](/img/k8s-host-architecture.png)

## Prerequisites

1. Have a Kuberentes cluster ready with kubectl available.
   
2. **Agent namespace** - In order to communicate with the cluster, you will need to install the *Torque agent* on your cluster. Create a namespace for the agent and keep note of the name, you will need it in when you connect the cluster to Torque.
   
3. **Sandboxes namespaces** - If your environments will deploy K8s resources (pods, services, etc...) create namespaces where the resource will be created (or, have a list of namespaces ready). You will need the names of the namespaces when you connect the cluster. Note, every space will be attached to one namespace. If you're using the K8s cluster just as a host and don't plan on deploying resources to other namespaces, you can specify the agent namespace as a sandbox namespace.
   
4. **Authentication and Permissions** - in order to create the environments, the execution host will need sufficient permissions to create the required resources. There are a couple of ways to provide the permissions:
   
   1. [Recommended] Create a designated *service account* with the required permissions, and specifying it in the blueprint. Please see [Service Accounts](/getting-started/Service%20Accounts) section for more details. 
   2. Create a custom script which executes the authentication and design your sandbox to execute it before the environment is created. Please see [TBD] for details.
   

## Instructions


1. Make sure you are in **Admin Console** page, in the **Cloud Accounts** tab.

2. Click **Add Cloud Account** and complete the wizard with the information you collected before. 
   > ![Locale Dropdown](/img/add-k8s-wizard.png)

3. Once you've filled the information, Torque generates the agent *deployment file*. Copy the file content and save it locally. 
   
4. Deploy the agent to your cluster as follows:
   ``` kubectl apply -f <file-name> ```

5. Click on "Check Connectivity" to verify that the agent can sucessfully communicate with Torque. 

6. Once verified, click **Finish** in the window that pops up.


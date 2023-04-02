---
sidebar_position: 12
title: Configuring Cost for Kubernetes
---


Torque collects cost data using cost collection targets, which are managed in the __Administration__ page's __Cloud Accounts__ tab. For AWS and Azure clouds, you must first add a cost collection target, however for K8s, Torque automatically creates a cost collection target when an agent is installed on the cluster. 

Follow the next steps to start collecting cost on your K8s cluster:

1. Install Kubecost: 
   1. Torque collects cost data directly from the pods using a 3<sup>rd</sup>-party tool called Kubecost. To start collecting costs from your cluster, deploy Kubecost in your cluster.
      * For deployment instructions, see: https://www.kubecost.com/install.html#show-instructions
      * Make sure the kubecost default namespace is used (Namespace kubecost)
2. Validate the relevant cost collection target:
   1. Identifiy the relevant cost collection target. Its name will be the same name as the agent installed on the cluster. 
   2. Click the cost collection target's 3 dot menu and select __Validate__ to make sure it works (i.e. cost data can be collected).
      * If validation fails, perform the procedure described in [Troubleshooting](#troubleshooting).
3. Enable the relevant cost collection target:
   1. Go to __Administration > Cost > Clouds__.
   2. Click the desired cost collection target's __Enabled__ toggle.

     > ![Locale Dropdown](/img/enable-cost-target.png)

## Troubleshooting
   
1. Verify that Kubecost is deployed in the cluster. 
   1. Navigate your browser to http://localhost:9090/. If you can see kubecost data, it means it's working. If you can't, see [this guide](https://docs.kubecost.com/troubleshooting/troubleshoot-install) for help.
2. In Torque, try to re-enable the K8S cost collection target and validate that it works.
3. If the error still exists, contact Torque support.

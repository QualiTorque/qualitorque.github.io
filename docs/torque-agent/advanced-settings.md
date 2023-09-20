---
sidebar_position: 7
title: Changing advanced K8s settings
---

While Torque offers a best practice configuration settings for deploying environments from your cluster, there may arise certain situations where overriding Torque's default settings becomes necessary based on your specific requirements. You can modify certain settings of the Torque runners (i.e. it will NOT affect your workloads, only the Torque workloads).

Modifying these settings should be performed by the cluster administrator or subject to their approval, ensuring alignment with other existing cluster configurations you may have in place.

To modify these advanced settings, navigate to Administration --> Agents and select the agent which resides on the relevant cluster. 
On the left 3-dot menu, click on "Edit Agent" --> Then open the "Advanced Kubernetes Settings" dropdown.

![](/img/k8s-advanced-settings.png)

In this panel, you can edit the agent name, and tenant-id for AKS agents. 
In addition, you can retrieve the namespace where the Torque agent is running (but not change it).

## Advanced Settings

- Storage Class is a K8s resource which allows you to request to create persistent volumes with certain properties. The storage class describes the properties then Torque 
will request for the runner to create storage according to these properties. By default it is set to "Cluster's default" which means the Torque runners will request the storage properties according to what is defined as the default storage class in the cluster. If you change it to other value, Torque runners will request the storage class based on the new value.

:::note
For reclaimPolicy (delete|retain) - we recommend using "delete" (extra care should be taken if the policy is set to "retain").
:::

Learn more [here](https://kubernetes.io/docs/concepts/storage/storage-classes/)

- Runner Startup Timeout - the time Torque will wait for a runner pod to be provisioned. If you cluster is slow in creating pods/nodes in autoscaling, you may need to increase it. Be careful of setting too large timeouts, because if there is an inherent problem in the POD the error will suffice later. 



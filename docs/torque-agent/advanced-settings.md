---
sidebar_position: 7
title: Changing advanced K8s settings
---

While Torque offers a best practice configuration settings for deploying environments from your cluster, there may arise certain situations where overriding Torque's default settings becomes necessary based on your specific requirements. You can modify certain settings of the Torque runners (i.e. it will NOT affect your workloads, only the Torque workloads).

Modifying these settings should be performed by the cluster administrator or subject to their approval, ensuring alignment with other existing cluster configurations you may have in place.

To modify these advanced settings, navigate to Administration --> Agents and select the agent which resides on the relevant cluster. 
On the left 3-dot menu, click on "Edit Agent" --> Then open the "Advanced Kubernetes Settings" dropdown.

![agent-advanced-settings](/img/k8s-advanced-settings2.png)

In this panel, you can edit the agent name, and tenant-id for AKS agents. 
In addition, you can retrieve the namespace where the Torque agent is running (but not change it).

## Advanced Settings

:::note
Changes to the configuration only takes effect on new environments. Existing environments will keep the values configured at the time of the launch.
:::

### storage class

**Storage Class** is a K8s resource which allows you to request to create persistent volumes with certain properties. The storage class describes the properties then Torque 
will request for the runner to create storage according to these properties. By default it is set to "Cluster's default" which means the Torque runners will request the storage properties according to what is defined as the default storage class in the cluster. If you change it to other value, Torque runners will request the storage class based on the new value.

:::tip
For reclaimPolicy (delete|retain) - we recommend using "delete" (extra care should be taken if the policy is set to "retain").
:::

Learn more [here](https://kubernetes.io/docs/concepts/storage/storage-classes/)

### startup timeout

**Runners pod startup timeout (seconds)** - The time Torque will wait for a runner pod to be provisioned. If you cluster is slow in creating pods/nodes in autoscaling, you may need to increase it. Be careful of setting too large timeouts, because if there is an inherent problem in the POD the error will suffice later. 

### idle timeout

**Runner pod idle timeout (seconds)** - The time Torque will wait before terminating and idle Runner. Any non-negative value is accepted. As runners are allocated from a shared pool, setting the timeout to higher values will optimize the current operation which already "owns" the runner, but will decrease the average pool size so the next operations may need to wait longer before they get a runner. Higher values can also be used for debugging purposes, as it allows more time to connect to the runner, look at its logs and debug issues.


### storage size

**Total storage size (PVC size in MB)** - The total size of PVC storage that will be allocated to Torque runners. 

### resource consumption

**Resource consumption** - The level of resources consumption (Memory + CPU) that will be requested by the Runners. The values are `Low`, `Medium`, `High`. The actual eventual values of the resources are calculated according to this field. Higher values ensure better performance of the POD, but be careful not to set it too high as it may be impossible to schedule it given the cluster's resources.
The value may be set for low for dev&test use cases, and high for production environments.

### storage class

**Storage class supports ReadWriteMany** - Check this checkbox if the storage class supports ReadWriteMany capability. Only storage classes which support this capability can share resources. If it is false there will not be sharing and each operation will spawn a new runner pod. Torque cannot query the cluster to understand if it does or does not have this capability so we rely on your information. If you check this checkbox, you must also set the storage_class_name and not leave it empty. Even if the default storage class supports ReadWriteMany, please state the name explicitly.  

### environment variables

**Environment variables** - key-values pairs of environment variables to set on the runner pod. This can be useful for configuring global configuration such as HTTP_PROXY. It will affect all runners in the cluster.

![agent-advanced-settings](/img/k8s-advanced-settings-env-vars.png)


### secret mount

**Secret mount** - key-values pairs of Secret name to mount path to set on the runner pod. This can be useful for a mounting a certificate, located in a Kubernetes secret, to a directory in the container. It will affect all runners in the cluster.

![agent-advanced-settings](/img/k8s-advanced-settings-secrets.png)

### pod labels

Similar to Environment Variables and Secret Mounts, Torque allows you to specify labels that will be applied to the runner pods. These labels can be useful for various purposes, such as identifying and grouping pods, applying network policies, or integrating with external tools that rely on labels.

To configure runner pod labels, navigate to **Administration** > **Agents**, and select the desired agent. In the agent's details panel, click on the three-dot menu and select "Edit Agent." Then, open the "Advanced Kubernetes Settings" dropdown.

In the `Advanced Kubernetes Settings` section, you will find the `Labels` field, where you can define key-value pairs of labels to be applied to the runner pods.


You can define runners pod labels on a grain level as well.

Here's an example of how you can define labels in the Blueprint:

```yaml
spec_version: 2
description: Deploying Helm Chart by tag version

inputs:
  agent:
    type: agent

grains:
  standard-helm-chart:
    kind: helm
    spec:
      agent:
        name: '{{ .inputs.agent }}'
        kubernetes:
          pod-labels:
            - app: quali-torque
            - app.kubernetes.io/managed-by: Helm
            - app_cmdb_id: A1755468
            - app_family: cloud_product_mgmt
            - app_pod_name: quali-torque
            - app_version: 2.0.7113607701
            - assignment_group: DL_IAD_Development_Operations
            - container_name: quali-torque
            - platform_short_name: cloud_product_mgmt
            - support_escalation_group: DL_IAD_Development_Operations
            - version: 2.0.7113607701
```

In the above example, the `pod-labels` section under `kubernetes` defines a list of key-value pairs that will be applied as labels to the runner pods.

:::note
- Labels are applied to all runner pods created by the agent, regardless of the environment or blueprint.
- Changes to the labels will only take effect for new environments. Existing environments will retain the labels configured at the time of launch.
- Labels should be configured by the cluster administrator or someone with appropriate permissions, as they can impact the behavior and management of pods in the cluster.
:::

Using labels can help you organize and manage your runner pods more effectively. You can leverage labels for various purposes, such as filtering, grouping, or applying policies to specific sets of pods. Additionally, labels can be used for integration with external tools or services that rely on label selectors for their operations.

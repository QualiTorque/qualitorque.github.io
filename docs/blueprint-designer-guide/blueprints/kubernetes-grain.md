---
sidebar_position: 18
title: The Kubernetes Grain​
---

The Kubernetes grain allows you to use native Kubernetes manifests, manifest catalogs in a given user's repository. Currently, it is not possible to launch multiple concurrent environments from the same blueprint on the same namespace (because the manifest resources are static and their names are not unique).

### Tools and technologies
The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts (pre/post, etc.):

- dotnet
- curl
- kubectl
- jq

### source 
Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### agent
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.


### tags​
Whenever a Kubernetes grain is launched, all resources created during the deployment process are automatically tagged with Torque's system tags, built-in tags and custom tags. If you wish to disable tagging for all resources in a specific Kubernetes grain, use the following syntax:

```yaml
grains:
  database:
    kind: kubernetes
    spec:
      tags:
        auto-tag: false
```

### namespace
The deployment namespace must exist in the cluster prior to the deployment. It must not be equal to the namespaces used by Torque for agent deployments.

```yaml
grains:
  web-client:
    kind: kubernetes
    spec:
      sources:
        ...
      namespace: '{{ .inputs.namespace }}'
```
:::tip __Note__:
* Launching concurrent environments with a Kubernetes grain is not supported for the same namespace. 
* Make sure the Torque agent has permissions to use those namespaces.
:::

### scripts (outputs)
Kubernetes does not natively support outputs. Using Torque, you can overcome this and provide outputs from the manifest installation process using scripts. In this approach, the script must export environment variables. These environment variables can later be declared also as outputs.
The script is defined in the blueprint and executed after the grain's installation.

For example, script named __post-install-script.sh__ that generates two outputs:
 
```yaml
outputs:
  output1:
    kind: regular
    value: '{{.grains.nginx.scripts.post-kubernetes-install.outputs.output1}}'
  output2:
    kind: regular
    value: '{{.grains.nginx.scripts.post-kubernetes-install.outputs.output2}}'

grains:
  nginx:
    kind: kubernetes
    spec:
      source:
        ...
      namespace:
      agent:
        ...
      scripts:
        post-kubernetes-install:
          source:
            store: Torque-Spec2-Demos
            path: scripts/post-install-script.sh
          outputs:
            - output1
            - output2
```

---
sidebar_position: 11
title: The Kubernetes Grain​
---

The Kubernetes grain allows you to deploy native Kubernetes manifests and manifest catalogs from your repositories as part of a Torque blueprint. The grain leverages Kubernetes' declarative approach to manage containerized applications and services within your Torque environments.

## Tools and technologies

The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when designing Kubernetes deployments:

* dotnet
* curl
* kubectl
* jq

## Namespace considerations

:::warning Important
* The target namespace must exist in the cluster prior to deployment
* The namespace must not be equal to the namespaces used by Torque for agent deployments
* Ensure the service account has sufficient permissions to create/read/delete everything in the manifest, including secrets and volumes
* Currently, it is not possible to launch multiple concurrent environments from the same blueprint on the same namespace because the manifest resources are static and their names are not unique
:::

## Usage example

```yaml
spec_version: 2
description: Deploy a web application with NGINX and Redis

inputs:
  agent:
    type: agent
  namespace:
    type: string
    default: "web-app"
  replicas:
    type: string
    default: "3"

grains:
  web_application:
    kind: kubernetes
    spec:
      source:
        store: k8s-manifests
        path: web-app/deployment.yaml
      target-namespace: '{{ .inputs.namespace }}'
      agent:
        name: '{{ .inputs.agent }}'
        service-account: 'torque-k8s-sa'
      scripts:
        post-kubernetes-install:
          source:
            store: k8s-scripts
            path: scripts/get-service-info.sh
          outputs:
            - service_url
            - service_port
```

## Grain Spec Reference

### `source`

The `source` section specifies where your Kubernetes manifests are located. This can be a direct path to a manifest file or a reference to a directory containing multiple manifest files.

**Example - single manifest:**

```yaml
kubernetes_grain:
  kind: kubernetes
  spec:
    source:
      store: k8s-repo
      path: manifests/nginx-deployment.yaml
```

**Example - manifest directory:**

```yaml
kubernetes_grain:
  kind: kubernetes
  spec:
    source:
      store: k8s-repo
      path: manifests/web-app
```

Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### `agent`

The agent executing the Kubernetes grain must have access to the target Kubernetes cluster and appropriate permissions to deploy resources in the specified namespace.

Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

### `target-namespace`

The `target-namespace` field specifies which Kubernetes namespace the manifests will be deployed to. The namespace must exist prior to deployment.

```yaml
grains:
  web_app:
    kind: kubernetes
    spec:
      source:
        store: k8s-repo
        path: web-app/
      target-namespace: '{{ .inputs.namespace }}'
      agent:
        name: '{{ .inputs.agent }}'
        service-account: '{{ .inputs.service_account }}'
```

:::info
* Launching concurrent environments with a Kubernetes grain is not supported for the same namespace
* Ensure the Torque agent has permissions to use the target namespace
* The namespace must not be equal to namespaces used by Torque for agent deployments
:::

### `tags`

Whenever a Kubernetes grain is launched, all resources created during the deployment process are automatically tagged with Torque's system tags, built-in tags, and custom tags. You can disable auto-tagging for specific grains if needed.

**Example - disable auto-tagging:**

```yaml
grains:
  database:
    kind: kubernetes
    spec:
      source:
        store: k8s-repo
        path: database
      target-namespace: 'database-ns'
      tags:
        auto-tag: false
```

### `scripts`

Kubernetes does not natively support outputs from manifest deployments. Using Torque scripts, you can extract information from deployed resources and provide it as grain outputs. Scripts are executed after the grain's installation and must export environment variables that correspond to declared outputs.

**Usage example:**

```yaml
outputs:
  service_url:
    kind: regular
    value: '{{ .grains.nginx.scripts.post-kubernetes-install.outputs.service_url }}'
  service_port:
    kind: regular
    value: '{{ .grains.nginx.scripts.post-kubernetes-install.outputs.service_port }}'

grains:
  nginx:
    kind: kubernetes
    spec:
      source:
        store: k8s-manifests
        path: nginx/deployment.yaml
      target-namespace: 'web-services'
      agent:
        name: '{{ .inputs.agent }}'
      scripts:
        post-kubernetes-install:
          source:
            store: k8s-scripts
            path: scripts/get-service-info.sh
          outputs:
            - service_url
            - service_port
```

The script `get-service-info.sh` should export environment variables that match the declared outputs:

```bash
#!/bin/bash
# Example script to get service information
SERVICE_URL=$(kubectl get service nginx-service -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
SERVICE_PORT=$(kubectl get service nginx-service -o jsonpath='{.spec.ports[0].port}')

export service_url="http://${SERVICE_URL}"
export service_port="${SERVICE_PORT}"
```

:::tip
Scripts have access to `kubectl` and can query the deployed resources to extract useful information for other grains or blueprint outputs.
:::

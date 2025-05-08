---
sidebar_position: 6
title: The ArgoCD Grain
---

ArgoCD is a popular GitOps continuous delivery tool for Kubernetes. Integrating ArgoCD as a grain in Torque enables a **single pane of glass** for life-cycle management of your Kubernetes applications. With the ArgoCD grain, you can automate deployment, monitor application health, and manage the full application lifecycle directly from your Torque blueprints, alongside other grains such as Helm, Terraform, and Ansible.

## Configuring a Deployment Engine

Before using the ArgoCD grain, you must configure a Deployment Engine in Torque. This engine represents your ArgoCD server and is used to connect and manage applications.

The following fields are required:

- **Engine Name**: A unique name for your ArgoCD engine in Torque.
- **Engine Description**: (Optional) A description for easy identification.
- **Server URL**: The URL of your ArgoCD server (e.g., `https://argocd.example.com`).
- **Token**: The authentication token for accessing the ArgoCD API.
- **Discovery Agent**: The Torque agent responsible for ongoing monitoring of tracked applications.
- **Polling Interval (seconds)**: How often Torque polls ArgoCD for application status and health.

### Obtaining the ArgoCD Token

To obtain a token for your ArgoCD server, use the `argocd` CLI:

```sh
argocd login <ARGOCD_SERVER> --username <USERNAME> --password <PASSWORD>
argocd account generate-token
```

- Replace `<ARGOCD_SERVER>`, `<USERNAME>`, and `<PASSWORD>` with your actual server and credentials.
- The output token can be used in the Torque Deployment Engine configuration.

## Use Cases

### 1. Helm-Driven ArgoCD Deployment and Tracking

The ArgoCD grain is often used in conjunction with the [Helm grain](/blueprint-designer-guide/blueprints/helm-grain.md). For example, you can use the Helm grain to deploy an application, and then use the ArgoCD grain to track and manage the application's lifecycle and health.

- Use the Helm grain to create an application that triggers an ArgoCD deployment.
- Use the ArgoCD grain to capture the deployed workloads and track application status and health.

### 2. Capture and Extend Workloads

- Use the ArgoCD grain to capture existing app workloads.
- Add more resources to the environment by chaining additional grains or blueprints, such as ingress configuration, secrets injection, or monitoring.

**Example Blueprint Sequence:**
```
argo-app (ArgoCD grain) 
   -> ingress configuration (Helm/other grain) 
   -> secrets injection (Terraform/Ansible grain) 
   -> monitoring (Helm/ArgoCD grain)
```

This approach allows you to build complex, multi-step environments where ArgoCD manages the core application, and Torque blueprints extend and enhance the deployment with additional resources and integrations.


## Usage example

```yaml
spec_version: 2

inputs:
  agro-server:
    type: string
    default: argo-qualilabs
    allowed-values: 
      - 'argo-qualilabs'
  argo-application:
    type: string
    default: devops-torque-ui
  agent:
    type: agent

grains:
  argo-app:
    kind: argocd
    spec:
      deployment-engine: '{{ .inputs.agro-server }}'
      agent:
        name: '{{ .inputs.agent }}'
      mode: data
      application: '{{ .inputs.argo-application }}'
      application-namespace: argocd
```

## The Grain spec

Below are the main fields available in the ArgoCD grain `spec` section:

### `agent`
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#host) for more details.

### `deployment-engine`

The name of the configured Deployment Engine in Torque. This field links the grain to a specific ArgoCD server configuration (see [Configuring a Deployment Engine](#configuring-a-deployment-engine)).  
**Example:**  
```yaml
deployment-engine: '{{ .inputs.agro-server }}'
```

### `mode`

The mode in which the ArgoCD grain operates.  
- `data` (read-only): The grain will only read and track the application state, without making changes.  
**Example:**  
```yaml
mode: data
```

### `application`

The name of the ArgoCD application to be tracked or managed. This should match the application name as defined in ArgoCD.  
**Example:**  
```yaml
application: '{{ .inputs.argo-application }}'
```

### `application-namespace`

The namespace in which the ArgoCD application resource exists.  
> **Note:** This is the namespace of the ArgoCD Application CRD, not the target namespace of the deployed workloads.  
**Example:**  
```yaml
application-namespace: argocd
```

---

For more details on Helm integration, see [The Helm Grain](/blueprint-designer-guide/blueprints/helm-grain.md).
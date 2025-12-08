---
sidebar_position: 2
title: Agent Requirements
---

# Agent Requirements

The Torque agent is a lightweight, Docker-based execution component that handles environment provisioning and lifecycle management. This page outlines the infrastructure requirements and specifications needed to run the Torque agent.

## Overview

The Torque agent can be deployed on two types of infrastructure:
- **Docker Host** - A standalone virtual machine or server running Docker
- **Kubernetes Cluster** - A managed or self-hosted Kubernetes cluster

Both deployment models are lightweight and require minimal resources to operate efficiently.

## Minimum Resource Requirements

### Per Agent Instance

The agent requires minimal compute and memory resources:

| Resource | Minimum | Recommended |
|----------|---------|-------------|
| CPU | 100m (0.1 vCPU) | 200m (0.2 vCPU) |
| Memory | 200Mi | 512Mi |
| Storage | 1GB | 5GB |

:::info
These requirements are for the agent container itself. Additional resources may be needed for workload execution depending on your blueprint complexity and concurrent environment deployments.
:::

## Infrastructure Requirements

### Docker Host Deployment

For running the agent on a Docker host, you'll need:

**Minimum VM Specifications:**
- **vCPUs**: 2 cores
- **Memory**: 4GB RAM
- **Storage**: 20GB disk space
- **Operating System**: Linux (Ubuntu 20.04+, RHEL 8+, CentOS 8+, Amazon Linux 2)
- **Docker Version**: 20.10 or later

**Network Requirements:**
- Outbound HTTPS (port 443) access to Torque SaaS
- Internet connectivity for pulling Docker images
- See [Torque Outbound Ports](/torque-agent/torque-outbound-ports.md) for detailed network requirements

**Example VM Configuration:**
```yaml
Instance Type Examples:
  AWS: t3.medium (2 vCPU, 4GB RAM)
  Azure: Standard_B2s (2 vCPU, 4GB RAM)
  GCP: e2-medium (2 vCPU, 4GB RAM)
```

### Kubernetes Cluster Deployment

For running the agent on Kubernetes, you'll need:

**Cluster Requirements:**
- **Kubernetes Version**: 1.20 or later
- **Node Resources**: At least one node with 2 vCPUs and 4GB RAM available
- **Storage Class**: Default storage class configured for persistent volumes
- **RBAC**: Enabled (required for agent permissions)

**Supported Kubernetes Platforms:**
- Amazon EKS
- Azure Kubernetes Service (AKS)
- Google Kubernetes Engine (GKE)
- Oracle Container Engine for Kubernetes (OKE)
- Self-managed Kubernetes clusters
- OpenShift
- Rancher

**Network Requirements:**
- Outbound HTTPS (port 443) access to Torque SaaS
- Internet connectivity for pulling container images
- See [Torque Outbound Ports](/torque-agent/torque-outbound-ports.md) for detailed network requirements

## Kubernetes Agent Manifest

When deploying to Kubernetes, the agent is installed using a manifest that includes the following components:

### Core Components

1. **Namespace** - Dedicated namespace for agent isolation
2. **ServiceAccount** - Identity for the agent pods
3. **ClusterRoles** - Permissions for cluster-level and namespace-level operations
4. **ClusterRoleBindings** - Binding service account to required roles
5. **Secret** - Stores cluster token and logging configuration
6. **Deployment** - Manages agent replicas (default: 2 replicas for high availability)

### Agent Permissions

The agent requires two sets of permissions:

**Cluster-Level Read Permissions:**
- List storage classes
- List namespaces
- List service accounts

**Namespace-Level Permissions:**
- Full control over deployments, replicasets, and pods
- Manage services, configmaps, secrets
- Create and manage persistent volume claims
- Manage ingresses and network policies
- Access pod logs and events
- Execute jobs

### Example Deployment Specification

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: torque-agent
  namespace: torque-agent
spec:
  replicas: 2
  selector:
    matchLabels:
      app: torque-agent
  template:
    metadata:
      labels:
        app: torque-agent
    spec:
      containers:
      - name: torque-agent-container
        image: quali/kubernetes-agent:latest
        imagePullPolicy: IfNotPresent
        resources:
          limits:
            cpu: 100m
            memory: 200Mi
          requests:
            cpu: 100m
            memory: 200Mi
        env:
        - name: AgentSettings__ClusterToken
          valueFrom:
            secretKeyRef:
              name: torque-agent-secret
              key: cluster-token
        - name: AgentSettings__ClusterId
          value: <your-cluster-id>
        - name: AgentSettings__ServerUrl
          value: https://<your-torque-instance>/hub/agent
      serviceAccountName: torque-agent-sa
```

## Scaling Considerations

### High Availability

For production deployments, consider:
- **Multiple Replicas**: Deploy 2+ agent replicas for redundancy
- **Node Distribution**: Use pod anti-affinity to distribute replicas across nodes
- **Resource Limits**: Set appropriate limits to prevent resource contention

### Workload Capacity

Agent capacity depends on:
- Number of concurrent environment deployments
- Complexity of blueprints (number of grains, resources)
- Duration of provisioning operations

**Scaling Guidelines:**
- Single agent: 5-10 concurrent environments
- Additional replicas: Linear scaling for concurrent capacity
- Heavy workloads: Consider dedicated node pools or larger VM instances

## Scaling Table (Quick Reference)

The table below provides recommended starting points for agent deployment sizing based on the number of concurrent environments and average workload complexity. Use these as guidelines and adjust based on observed agent CPU/memory usage and provisioning times.

| Concurrent Environments | Tier | Agent Replicas | Node Pool / VM Size Recommendation | Notes |
|-------------------------|------|----------------|------------------------------------|-------|
| 1 - 10 | Light | 1 - 2 | 1 node, 2 vCPU / 4GB RAM | Light workloads; single replica acceptable for non-critical use.
| 11 - 100 | Medium | 2 - 4 | 2-3 nodes, each 2-4 vCPU / 4-8GB RAM | Medium concurrency; HA recommended and anti-affinity.
| 101 - 200 | Increased parallelism | 4 - 8 | 3-5 nodes, each 4 vCPU / 8GB RAM | Higher parallelism; consider dedicated node pools and tuned resource limits.
| 200+ | High concurrency + Large | 8+ | 4+ nodes, each 8+ vCPU / 16+GB RAM; autoscaling recommended | Very high concurrency; perform load testing and monitor closely.

Notes:
- "Concurrent Environments" refers to environments actively provisioning or heavily operating at the same time.
- Agent replica counts assume default agent resource requests/limits (100m CPU / 200Mi memory). Increase per-agent resources for heavy or long-running workloads.
- For Kubernetes, use PodDisruptionBudgets, anti-affinity, and multiple replicas across failure domains to ensure availability.
- Monitor agent pod CPU/memory and adjust cluster autoscaler and node sizes accordingly.

## Getting Started

Once you've prepared your infrastructure, proceed with agent installation:

- **Docker Host**: See [Torque Docker Agent](/torque-agent/torque-docker-agent.md)
- **Kubernetes Cluster**: See [Install and Connect Self-Hosted Agent](/torque-agent/Install-and-connect-self-hosted-agent.md)

## Additional Resources

- [What is the Torque Agent?](/torque-agent/Torque-Agent-Intro.md)
- [Advanced Agent Settings](/torque-agent/advanced-settings.md)
- [Network Requirements](/torque-agent/torque-outbound-ports.md)
- [Azure VMSS Deployment](/torque-agent/torque-agent-on-azure-vmss.md)

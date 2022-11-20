---
sidebar_position: 7
title: Connect an Agent to your space
---

Next, let's connect an agent Torque. The agent is Torque code which will launch and provision the environment infrastructure. For example, if a blueprint contains a terraform module or a helm chart to provision resources, the commands such as `terraform apply` or `helm install` would be run by the agent.

:::tip Note:
The infrastructure resources of the environment may be deployed to other clouds or platforms.
:::

Torque supports two types of agents: 
- Quali hosted agent   
- Self hosted agent [Kubernetes Cluster](/getting-started/Connect%20a%20Kubernetes%20Cluster) 

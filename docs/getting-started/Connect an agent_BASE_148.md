---
sidebar_position: 6
title: Connect an Agent to your space
---

Next, let's connect a Torque agent. The agent is basically Torque code that launches and provisions the environment infrastructure. For example, if a blueprint contains a terraform module or a helm chart to provision resources, the agent will run commands such as `terraform apply` or `helm install`.

:::tip Note:
The infrastructure resources of the environment may be deployed to other clouds or platforms.
:::

Torque supports two types of agents:
- Quali-hosted agent - see [Using the Quali-hosted agent](/getting-started/Quali-hosted-agent.md) 
- Self-hosted agent [Connect a Kubernetes Cluster](/getting-started/Install-and-connect-self-hosted-agent.md) 

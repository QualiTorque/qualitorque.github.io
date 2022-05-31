---
sidebar_position: 7
title: Connect an Execution Host
---

Next, let's connect an execution host to Torque. The execution host is the platform on which the asset will be executed. For example, a Kubernetes cluster can be used as an execution host, and the commands such as `terraform apply` or `helm install` would be run from the cluster.

This is just the execution host - the actual resources may be deployed to other clouds or platforms.

Supported types of hosts: 
- [Kubernetes Cluster](/getting-started/Connect%20a%20Kubernetes%20Cluster) 
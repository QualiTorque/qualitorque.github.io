---
sidebar_position: 1
---

# Architecture

Torque is a SaaS platform that interfaces with different cloud services to enable the deployment and modelling of applications.

It deploys environments in the cloud using a Torque compute service. The Torque compute service stores the cloud provider's access credentials and defines the Kubernetes cluster and namespaces in which the environment's cloud resources will be deployed. This applies to AWS and Azure. However, for vCenter, the Torque compute service must be linked to a Torque vCenter agent, which contains the vCenter admin credentials.

When a new environment is launched in Torque, the Torque compute service connects to the appropriate Kubernetes cluster or vCenter Server and provisions the environment's cloud infrastructure based on the blueprint's YAML definition file, including cloud networks, subents, VMs, accessibility rules, peering connections, and more. Different environments can be deployed to different namespaces, depending on the Torque compute service, and multiple environments can live in the same namespace simultaneously.

> ![Locale Dropdown](/img/architecture.png)
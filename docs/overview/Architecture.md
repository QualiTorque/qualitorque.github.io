---
sidebar_position: 6
---

# Architecture

Torque is a SaaS platform that interfaces with different cloud services to enable the deployment and modelling of applications.

It deploys environments in the cloud using a Torque execution agent. The Torque execution agent stores the cloud provider's access credentials and defines the Kubernetes cluster and namespaces in which the environment's cloud resources will be deployed. This applies to public clouds like AWS, GCP and Azure, while for vCenter, the Torque execution agent must be linked to a Torque vCenter agent, which contains the vCenter admin credentials.

When a new environment is launched in Torque, the Torque execution connects to the appropriate Kubernetes cluster or vCenter Server, provisions the environment's cloud infrastructure based on the blueprint's YAML definition file, including cloud networks, subents, VMs, accessibility rules, peering connections, and installs and configures the applications from the blueprint's asset files (Terraform, Helm, Kubernetes, etc.). Different environments can be deployed to different namespaces, depending on the Torque execution agent, and multiple environments can live in the same namespace simultaneously.

> ![Locale Dropdown](/img/architecture2.png)
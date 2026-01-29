---
sidebar_position: 3
title: Resource Introspection & Layouts
---

While infrastructure orchestration using Infrastructure as Code (IaC) framework become a standard, it entails a challenge of visibility to the deployed resources. As environment consumers might not have access to the cloud provider itself, but still needs access and information about the deployed resources Torque is providing __Resource introspection__ and __Resource layout__ for any of the deployed IaC frameworks. Any of the deployed resources will have it's associated attributes that can be used to access and control it. Note that introspection information is available only after the grain deployment complete successfully.


> ![Introspection](/img/env-resources.png)

Based on the introspection data, Torque generates a __Resource layout__, which is usually used by an environment consumer (who may not be an expert in IaC of automation frameworks). The layout will highlight the interesting entities out of the large amount of resources that deployed in the environment.

In the following example, we deployed a single Terraform file that deployed a 3 tier wordpress application. The deployment process ended and 28 cloud resources created. 

> ![Introspection](/img/env-resources-infra.png)

Out of the 28 deployed resources, Torque highlights the 3 VM with their basic attributes like public IP and instance type presented on the cards. The introspection data, is used to enable resource Actions, workflows and remote connection for specific resource types.

> ![Introspection](/img/env-resources-view.png)

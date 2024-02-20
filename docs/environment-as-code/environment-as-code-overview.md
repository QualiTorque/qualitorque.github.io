---
sidebar_position: 1
title: Overview
---

## Torque **Environment as Code**
Torque **Environment as code** provides a declarative way to define complex cloud environments, based on IaC assets (Terraform, Helm, CloudFormation, etc.) and governed by centralized policies. While 'as-code' practices were well adopted for infrastructure, configurations and policies, it is extremely difficult to combine them into a single source that fits the business requirements, can be generated using an automation process, audited and manually approved if required. <br />
Using **Environment as code** you can ensure a standard workflow is being applied so changes to the environment (development, staging, production etc) are being tracked, tested and applied frequently per organizational policies and practices. With Torque blueprints as building blocks, one can launch and manage a Torque environment with maximum flexibility, access, and control while taking advantage of the predefined guardrails in place to prevent unwanted activity from occurring.


![Environment as Code overview](/img/eac-overview.png)

### Why Environment as Code?
EaC brings numerous advantages to the table, some of which include:
* **Version Control**: Just like your application code, your environments can be versioned, ensuring that every change is tracked and can be rolled back if necessary.
* **Consistency**: Environment as Code ensures that your environments are provisioned consistently every time, eliminating the "it works on my machine" syndrome.
* **Speed**: Provisioning environments can be done quickly, enabling a rapid response to development, testing, or production needs.
* **Collaboration**: Environment as Code allows for better collaboration among team members and across departments by using a shared definition for environments.
* **Cost-Efficiency**: By automating the provisioning process, organizations save on the labor costs associated with manual environment setups.

## GitOps & Environment as Code
The GitOps approach extends the use of Git to an application's configuration, infrastructure, and operational procedures, in addition to its source code. Managing software deployment and infrastructure provisioning is easier with Git, since it includes every aspect of an application's infrastructure in Git repositories, such as code files, configuration files, and application code files. By leveraging a declarative format, you can describe how your infrastructure works as well as the applications that are running on top of it. Doing this enables traceability of changes made to any environment and enables rollback, recoverability, and self-healing attributes using any source control system. Move away from imperative ad-hoc scripts to declarative configuration in all levels (app and infra). 

Implementing GitOps implies that changes to applications and infrastructure are automatically synchronized with the live environment promoting source control management platforms as the single source of truth.

Torque **Environment as code** provides an additional layer of control based on multi-tech, multi-cloud automation assets built for Git based operations (GitOps). With Torque you can launch, update, change and terminate complex application environments based on your existing Git flow.

## Implementing Environment as Code with Torque
Implementing Environment as Code using Torque involves discovering your infrastructure-as-code assets as blueprints and combining them using the Torque environment YAML together with metadata that will be kept and evaluated upon launch, updates and termination of the environment. Every Toruqe environment, regardless if operated in a GitOps manner or not, is managed using an environment YAML behind the scenes. Browsing to the environment YAML in the Torque self-service portal on any running environment can give a glimpse of how the YAML looks like for the specific environment launch.

![Environment as Code YAML](/img/eac-yaml.png)

---
sidebar_position: 7
title: Outbound Ports for Self-hosted Agents
---

This table lists the outbound ports that are required for Kubernetes cluster nodes to fully function when hosting a Torque agent.

|Target Name                                |Target Address/Hostname                             |Type        |Ports|Traffic Purpose                                |
|------------------------------------       |----------------------------------------------------|------------|-----|-----------------------------------------------|
|Torque Back-end Services & APIs                       |https://portal.qtorque.io                       |HTTPS       |443  |Communicate from agent to Torque APIs          |
|Message broker for Torque <br /> (Deprecated)                |https://portal.qtorque.io <br /> |HTTPS      |443|Communicate between agent and back-end using message queues|
|Github                                     |https://github.com/your_repo                        |HTTPS|443   |Retrieve customer's repo from GitHub using Git to TF Runner Pod|
|Hashicorp - Terraform Releases download    |https://releases.hashicorp.com                      |HTTPS|443   |Download and install Terraform on sandbox TF Runner pod|
|Hashicorp - Terraform Providers registry   |https://registry.terraform.io                       |HTTPS|443   |Download Terraform provider to TF Runner Pod|

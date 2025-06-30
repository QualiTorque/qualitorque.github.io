---
sidebar_position: 7
title: Outbound Ports for Self-hosted Agents
---

This table lists the outbound ports that are required for Kubernetes cluster nodes to fully function when hosting a Torque agent.

|Target Name                                |Target Address/Hostname                             |Type        |Ports|Traffic Purpose                                |
|------------------------------------       |----------------------------------------------------|------------|-----|-----------------------------------------------|
|Torque Back-end Services & APIs                       |https://portal.qtorque.io                       |HTTPS       |443  |Communicate from agent to Torque APIs          |
|Github                                     |https://github.com                        |HTTPS|443   |Optional. Access to Github.|
|Hashicorp - Official Terraform Releases & Providers registry    |https://releases.hashicorp.com https://registry.terraform.io                      |HTTPS|443   |Download and install Terraform on sandbox TF Runner pod|

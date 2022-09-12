---
sidebar_position: 5
title: Cost Monitoring
---

Torque's __Cost__ dashboard provides you with actionable insights into the costs of your organization's environment deployments. Cost data is collected using a __toque_environment_id__ tag that is assigned (with a unique value) to every new environment's resources.

## Supported cloud providers
* AWS
* Azure
* Kubernetes (EKS/AKS)

## Configuration
Torque collects cost data using cost collection targets, which are managed in the __Admin Console__'s __Cost__ page.
* Torque automatically creates a cost collection target for every Kubernetes execution host and begins collecting cost consumption data as environments using the execution hosts are deployed. However, Torque collects cost data directly from the pods using a 3<sup>rd</sup>-party tool called Kubecost, which must be [installed on clusters](https://www.kubecost.com/install.html#show-instructions) you wish to monitor.
* For CloudFormation grains, you need to manually create a cost collection target. By nature, CloudFormation grains are deployed directly on the AWS cloud account and therefore don't require the use of a Kubernetes execution host.

## Accuracy and incurred costs
* For CloudFormation grains, which are deployed directly on the cloud account, Torque syncs cost data once a day at 3:00 AM UTC time against the cloud provider.
* For all other grains, Torque collects the data from Kubecost on an hourly basis.

Torque calls your cloud provider's API to query the cost. This operation might incur additional charges from your cloud provider.

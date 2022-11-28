---
sidebar_position: 3
title: Cost
---

Torque's __Cost__ dashboard provides you with actionable insights into the costs of your environments. Cost data is collected using a __toque_environment_id__ tag that is assigned (with a unique value) to every new environment's resources. To learn more about Torque tagging, see [tags](tags.md).

> ![Locale Dropdown](/img/cost-dashboard.png)

With the cost dashboard, you can understand your business activities cost:
* Understand the total monthly cost
* Group by cloud account
* Group by application (blueprint) , Space (team), manual/automation, and by specific environment.


## Supported cloud providers
* [AWS](configuring-cost-aws.md)
* [Azure](configuring-cost-azure.md)
* [Kubernetes](configuring-cost-k8s.md)


:::note __Note__
Torque calls your cloud provider's API to query the cost. This operation might incur additional charges from your cloud provider.
:::
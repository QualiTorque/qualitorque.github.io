---
sidebar_position: 16
title: Environment Labels
---

## Overview
Environment Labels are metadata tags that can be assigned to different environments within your deployment infrastructure. These labels serve as values or key-value pairs that help organize, manage, and filter environments efficiently. By attaching labels to environments, users can easily filter, categorize and identify environments based on various criteria such as purpose, region, or application stage.
> ![img](/img/env-labels.png)

 
## Concept
Each environment label is a value or a combination of a key and a value. For example, a label could be `purpose:production`, where "purpose" is the key and "production" is the value. Another example can be 'Kubernetes' as a value of a label indicating the environment is a Kubernetes cluster.
 
Environment Labels in <ProductName /> are a powerful tool to streamline environment management by allowing users to tag, filter, and organize environments effectively. Implementing a consistent labeling strategy will enhance visibility, management efficiency, and collaboration within your organization.
 
### Flexible Categorization 
Environment labels allow you to categorize environments in any way that suits your organizational needs. Common examples include:
* Environment Type: `env:production`, `env:staging`, `env:development`
* Project or Application: `project:webapp`, `project:api`
* Owner or Team: `owner:devops`, `team:backend`
* Region or Location: `region:us-west`, `region:eu-central`
 
### Filtering and Searching
You can filter and search environments using labels. This is particularly useful when managing a large number of environments, as it allows for quick identification and retrieval of specific environments based on the applied labels.
 
### Automation and Scripting
Labels can be utilized in scripts or automation tools to perform operations on specific groups of environments. For instance, you can create scripts that only affect environments labeled as `env:staging`.
 
## Usage
### Creating and Assigning Labels
Labels can be assigned when creating a new environment or added to existing environments via the `<ProductName /> dashboard` or `API`.
> ![img](/img/env-labels-create.png)

### Best Practices
* It's recommended to establish a consistent labeling strategy within your organization to ensure labels are meaningful and useful.
* Agree on standard keys and values that everyone should use.

There are a few system reserved labels in <ProductName /> that are used to mark certain states. Here is a list of the system labels:
* `Drift Detected`
* `Pending Updates`
* `EaC:Active`
* `EaC:Inactive`
* `Power:On`
* `Power:Off`
 
## Benefits
* __Improved Organization__: Keep your environments organized and easy to manage, especially as the number of environments grows.
* __Efficient Management__: Quickly identify and perform bulk operations on environments with specific labels.
* __Enhanced Collaboration__: Labels provide clear communication across teams regarding the purpose and status of environments.

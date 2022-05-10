---
sidebar_position: 2
title: Custom Tags
---

Torque uses several out-of-the-box system tags to provide you with activity and cost data. In addition, you can attach your own custom tags to your environments for your own uses, including monitoring and control, troubleshooting, and more. All environment resources are tagged with Torque's out-of-the-box tags when the environment's deployment.
The following tags are supported:
* **activity_type**: This tag is defined by the account admin and allows the sandbox end-user to indicate the purpose of the sandbox. For example: "development", "manual-testing", "staging", etc. This tag comes out of the box with Torque and cannot be deleted.
* Account-level tags: Defined by the account admin and apply to all environments in Torque. Account-level tags cannot be overridden by anyone who is not an account admin.
* Space-level tags: Defined by the account admin and applies to all environments deployed in that space. This tag can be overridden by space admins.
* Blueprint-level tags: Defined by the account admin and can be overridden by the blueprint designer.
* Sandbox-level tags: Defined by the account admin and applies to all sandboxes in Torque. This tag can be overridden by the sandbox end-user.
  > Space, blueprint and sandbox-level tags can have a single value that will be used when deploying the environment, or multiple values, allowing the relevant user to select the appropriate one.

Tags are managed in the **Tags** administration page.

![Locale Dropdown](/img/admin-guide/tags-page.png)

Features and limitations:

* Custom tags apply for all blueprint types, including YAML and Terraform-based.
* Custom tags are applied to every cloud resource that is created in the sandbox or production environment, including resources created by services (Terraform modules), and deleted from the cloud along with the environment when it is ended/renamed.
* Custom tags are created on the account level and defined with a scope, which determines where they get their value (account, space, blueprint, and sandbox).
* The custom tag’s value can be defined by the Torque admin, selected from a dropdown list of possible values, or entered as freetext (if possible values were not defined).
* When a sandbox or production environment is deployed, its tags are the aggregation of the tags defined for this sandbox (in runtime), the blueprint tags, the space tags and the account tags, as well as the Torque automatic tags. 
* Custom tags are not used in environments deployed over existing cloud infrastructure.
* Up to 20 custom tags can be created, to avoid passing the limit of the cloud providers.
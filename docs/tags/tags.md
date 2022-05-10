---
sidebar_position: 1
title: Custom Tags
---

Torque supports the use of tags, to assist you with tracking your cloud activity and provide enhanced visibility into your cloud spend. Torque attaches the tags to the environment's resources during the environment's deployment.
The following tags are supported:
* **activity_type**: This tag is defined by the account admin and allows the sandbox end-user to indicate the purpose of the sandbox. For example: "development", "manual-testing", "staging", etc.
* Account-level tags: Defined by the account admin and apply to all environments in Torque. Account-level tags cannot be overridden by anyone who is not an account admin.
* Space-level tags: Defined by the account admin and applies to all environments deployed in that space. This tag can be overridden by space admins.
* Blueprint-level tags: Defined by the account admin and can be overridden by the blueprint designer.
* Sandbox-level tags: Defined by the account admin and applies to all sandboxes in Torque. This tag can be overridden by the sandbox end-user.
  > Space, blueprint and sandbox-level tags can have a single value that will be used when deploying the environment, or multiple values, allowing the relevant user to select the appropriate one.

Tags are managed in the **Tags** administration page.


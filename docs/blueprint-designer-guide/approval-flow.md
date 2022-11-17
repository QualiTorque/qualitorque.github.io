---
sidebar_position: 19
title: Approval Flow
---

As the blueprint designer, you can configure specific blueprints to require launching approval. This is useful for high-cost environments that require an additional pair of eyes to monitor and control their use and cloud spend. As a result, when an end-user attempts to launch such a blueprint, a space admin will be prompted to either Accept or Deny the request.

__Notes__: 
* The end-user cannot change the settings (duration, inputs, etc.) of the approved environment because the approval was based on the settings in the environment request.
* Only published blueprints can require approval.

## High-level flow

1. In the __Blueprints__ page, the blueprint designer enables the __Require approval__ toggle for the blueprint.
  > ![Locale Dropdown](/img/approval-flow-enable.png)
2. Environment end-user launches the blueprint from the __Environments__ catalog, fills in the environment's details, and clicks the environment's __Request Approval__ button. 
  > ![Locale Dropdown](/img/approval-flow-request.png)
Environment is created in __Pending Approval__ status.
3. Space admins receive a notification email with a link to the environment, prompting them to __Approve__ or __Deny__ the request, and provide a reason justifying their decision.
4. Space admin approves the request.
Environment's status changes to __Approved__, and the end user receives a notification email.
5. End-user launches the sandbox.

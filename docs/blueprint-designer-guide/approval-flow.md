---
sidebar_position: 19
title: Approval Flow
---

As the blueprint designer (who can be a space developer or space admin), you can configure specific blueprints to require launching approval. This is useful for high-cost environments or those containing sensitive information that require an additional pair of eyes to monitor and control their use and cloud spend. As a result, when an end-user attempts to launch such a blueprint, a space admin will be prompted to either Accept or Deny the request.

__Notes__: 
* The end-user cannot change the settings (duration, inputs, etc.) of the approved environment because the approval was based on the settings in the environment request.
* Only published blueprints can require approval.

## High-level flow

1. In the __Blueprints__ page, the blueprint designer enables the __Require approval__ toggle for the blueprint.
  > ![Locale Dropdown](/img/approval-flow-enable.png)
2. Environment end-user launches the blueprint from the __Environments__ catalog, fills in the environment's details, and clicks the environment's __Request Approval__ button. Optionally, the end-user can provide a comment justifying their need for the environment.
  > ![Locale Dropdown](/img/approval-flow-request.png)
Environment is created in __Pending Approval__ status, and can be found in the __Environments__ page (note the filters marked in red).
  > ![Locale Dropdown](/img/approval-flow-Environments-page.png)
3. Space admins receive a notification email with a link to the environment, where they can approve or deny the request, and provide a reason justifying their decision.
4. Space admin approves the request.
Environment's status changes to __Approved__, and the end user receives a notification email.
5. End-user launches the sandbox.

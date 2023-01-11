---
sidebar_position: 12
title: GitHub Actions Plugin
---

Use GitHub Actions to automate environment lifecycle management. We currently provide the following workflows, which can be added as new custom workflows or as additions to existing ones:
* [torque-start-sb-action](https://github.com/QualiTorque/torque-start-sb-action#readme): Starts an environment
* [torque-end-sb-action](https://github.com/QualiTorque/torque-end-sb-action#readme): Ends an environment

To integrate Torque with the GitHub Actions, make sure to complete the next few steps.

## 1. Install

__Prerequisites:__
* Admin permissions to add/update workflows on the required GitHub repository, and to add a token under the repository secrets.

__Install the plugin:__
* GitHub Actions can be used as part of the current workflows or as new workflows by just referring to the relevant action inside your workflow.

## 2. Configure

1. In the GitHub repository, go to __Settings > Secrets >__ new repository secret and create a secret called “TORQUE_TOKEN” with the value generated below:
2. Click the __Generate New Token__ button in the plugin's instructions pane.

## 3. Verify and launch
__Use Torque's tasks in your Jenkins pipeline__

Read more and view the usage examples for each one of the actions:
* [torque-start-sb-action](https://github.com/QualiTorque/torque-start-sb-action#readme)
* [torque-end-sb-action](https://github.com/QualiTorque/torque-end-sb-action#readme))

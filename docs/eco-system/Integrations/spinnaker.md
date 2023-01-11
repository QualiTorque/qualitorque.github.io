---
sidebar_position: 15
title: Spinnaker Plugin
---

The [Spinnaker plugin](https://github.com/QualiTorque/torque-spinnaker-plugin) lets developers trigger application environments on-demand directly from their Spinnaker pipelines. Spinnaker users can easily integrate the Torque environments-as-a-service platform into their projects by utilizing the Torque plugin’s pre-defined commands.

To integrate Torque with the Spinnaker plugin, make sure to complete the next few steps.

## 1. Install

__Prerequisites:__
* This plugin integrates Torque into your Pipelines in Spinnaker 1.23.0 and above.

__Install the plugin:__
* Read how to add the Halyard file that will be used to load the orca file, and how to add the profile file to load the Deck frontend [here](https://github.com/QualiTorque/torque-spinnaker-plugin#plugin-deployment-guide-for-spinnaker).

## 2. Configure

1. When adding the Halyard file, you’ll need to provide the following parameters:
    * __torqueUrl__ - Use https://portal.qtorque.io
    * __account__ - The Torque account name (optional)
    * __torqueToken__ - Use the token with the value generated below:
2. Click the __Generate New Token__ button in the plugin's instructions pane.

## 3. Verify and launch
Once installed, you’ll have 2 new stage types that you could use as part of your pipelines:
* __Torque Start Sandbox__ - will be used to start a new environment. Its outputs can be used to run the rest of the pipeline with this newly-deployed environment.
* __Torque End Sandbox__ - once the tests are completed, you can end the sandbox to teardown the environment.

Read more about these stages [here](https://github.com/QualiTorque/torque-spinnaker-plugin#usage).

---
sidebar_position: 18
title: TeamCity Plugin
---

The [Quali Torque plugin](https://plugins.jetbrains.com/plugin/18582-torque) lets developers trigger application environments on-demand directly from their TeamCity pipelines. TeamCity users can easily integrate the Torque environments-as-a-service platform into their projects by utilizing the Torque plugin’s pre-defined commands.

To integrate Torque with the Spinnaker plugin, make sure to complete the next few steps.

## 1. Install

1. Open the Torque Plugin page in the Jetbrains marketplace.
2. Download the latest version of the Torque plugin.
3. Open the TeamCity web UI as an administrator and perform the following steps:
   * Browse to the __Administration > Plugins__ page.
   * Click the __Upload plugin__ zip and upload the __*teamcity-torque-plugin.zip*__. A warning message is displayed recommending that you restart the TeamCity Server.
   * Click __Restart__ and wait for TeamCity to initiate.
4. To verify that the installation is successfully completed:
   * Browse to the __Administration > Plugins List__ page.
   * Under the __External plugins__ section, verify that the Torque Plugin appears with no warnings.
   * Open the __Projects Overview__ page and open any project.
   * Click __Edit Project Settings__.
   * Under the left __General Settings__ list, a Torque option appears (the tab will appear only if TeamCity was restarted as described in step 3).

## 2. Configure

1. Open TeamCity as Administrator.
2. Open the Project Administration page and click the Torque tab.
3. Click Connect.
4. Under the General Configuration section, enter the following parameters:
    * __Torque Server URL__: https://portal.qtorque.com
    * __Token__: Use the Token generated below

5. Click the __Generate New Token__ button in the plugin's instructions pane.

## 3. Verify and launch
After installing and configuring the TeamCity plugin, you can launch environments from your TeamCity Pipeline. Note that this plugin only supports environments.
Use the available build steps to create an environment from any blueprint, retrieve its details, start your tests and end the environment when it's no longer needed.

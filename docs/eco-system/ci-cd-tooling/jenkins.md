---
sidebar_position: 9
title: Jenkins Plugin
---

The [Jenkins plugin](https://github.com/jenkinsci/quali-torque-plugin/) lets developers trigger application environments on-demand directly from their Jenkins pipelines. Jenkins users can easily integrate the <ProductName /> environments-as-a-service platform into their projects by utilizing the <ProductName /> orb’s pre-defined commands.

To integrate <ProductName /> with the Jenkins plugin, make sure to complete the next few steps.

## 1. Install

__Install the latest version from within Jenkins:__
1. Navigate to __Manage Jenkins > Manage Plugins__ and select the __Available__ tab.
2. Locate this plugin by searching for "quali-torque".
3. Select and install the plugin.

__Or, manually download and install it:__
1. Download the latest __Jenkins <ProductName /> Plugin__ from [here](https://plugins.jenkins.io/quali-torque/#releases).
2. In Jenkins Web UI, click __Manage Jenkins > Manage Plugins__.
3. Select the __Advanced__ tab.
4. Scroll down to the __Deploy Plugin__ section.
5. Browse to and select the __*quali-torque.hpi*__ file you downloaded.
6. Click __Deploy__.
7. Make sure all tasks have been successfully completed.

## 2. Configure

1. Log in to Jenkins as administrator.
2. From the left pane, click __Manage Jenkins__, and then select __Configure System__.
3. Scroll down to the __Torque Connection__ section.
    a. The __Domain__ name or IP should be set to https://portal.qtorque.io
    b. Specify the __Token__. Use the one generated below:
4. Click the __Generate New Token__ button in the plugin's instructions pane.
5. Click __Save__.

## 3. Verify and launch
__Use <ProductName />'s tasks in your Jenkins pipeline__

After installing and configuring the Jenkins plugin, you can start using the plugin to launch environments from your Jenkins Pipeline. Note that this plugin only supports environments.
To use the plugin, you will need to instantiate a Blueprint object with using the torque global object. This object can then be used to start an environment. The environment object can later be used to end the <ProductName /> Environment.

To learn more about the parameters of each step, read [here](https://github.com/jenkinsci/quali-torque-plugin/#readme).

---
sidebar_position: 21
title: CircleCI Plugin
---

The [Quali <ProductName /> plugin](https://circleci.com/developer/orbs/orb/quali/torque) lets developers trigger application environments on-demand directly from their CircleCI pipelines. CircleCI users can easily integrate the <ProductName /> environments-as-a-service platform into their projects by utilizing by utilizing the <ProductName /> orb’s pre-defined commands.

To integrate <ProductName /> with the CircleCI plugin, make sure to complete the next few steps.

## 1. Install

1. In the CircleCI web app, navigate to the __Projects__ section and select __Project Settings__ from the menu next to your repository. 
2. Open the __Environment Variables__ page.
3. Add the following three variables:
   
   * __TORQUE_SERVER__: The URL of your <ProductName /> server (https://portal.qtorque.io).
   * __TORQUE_SPACE__: The name of your space in <ProductName />.
   * __TORQUE_TOKEN__: Use the token you generate below
4. Click the __Generate New Token__ button in the plugin's instructions pane.

## 2. Configure

__Using the torque orb in your config file__
* In your repository, edit the __*.circleci/config.yml*__ file and add torque to the orbs list. Example:

   ```yaml
   orbs:
      torque: quali/torque@1.1.0
   ```

It is recommended to use the [latest release version](https://circleci.com/developer/orbs/orb/quali/torque).

## 3. Verify and launch
__Use <ProductName />'s tasks in your CircleCI workflow__

Add the __torque/start-sandbox__ and __torque/end-sandbox__ commands to start and stop the environment in <ProductName />. Review examples [here](https://circleci.com/developer/orbs/orb/quali/torque#usage-examples).
See the parameters list for orb behavior command customization [here](https://circleci.com/developer/orbs/orb/quali/torque#jobs).

---
sidebar_position: 6
title: Azure DevOps Plugin
---

The Azure DevOps plugin lets developers trigger application environments on-demand directly from their Azure DevOps pipelines. Azure DevOps users can easily integrate the <ProductName /> environments-as-a-service platform into their projects by utilizing the <ProductName /> orb’s pre-defined commands.
To integrate <ProductName /> with the Azure DevOps plugin, make sure to complete the next few steps.

## 1. Install

__Prerequisites:__
* Admin permissions on the plugin’s intended Azure DevOps organization. If you are not the organization’s admin, you may send a request to the admin to install the plugin for you.
* Azure DevOps organization that will use the <ProductName /> plugin

__To Install the plugin:__
1. Log in to [VisualStudio.com](http://visualstudio.com) and select the organization that will use this plugin.
2. Click __Organization settings__.
3. From the left pane, select __Extensions__ and then click __Browse Marketplace__.
4. Search for “torque”, click the <ProductName /> plugin and then __Install__.

## 2. Configure

__To set your <ProductName /> account information:__
1. Click __Project Settings > Service connections__.
2. Click __New service connection__, select __Torque__, and click __Next__.
3. Specify the server url (https://portal.qtorque.io).
4. Specify the __Torque Long Token__ with the one generated below:
5. Click __Generate New Token__ in the plugin's instructions pane.
6. Click __Verify__ and make sure the connection succeeds.
7. In the __Service Connection Name__ field, enter '<ProductName /> connection'.
8. Click __Verify__ and save.

## 3. Verify and launch
Use <ProductName />'s environments in your Azure DevOps Build
Use the available build steps to create an environment from any blueprint, retrieve its details, start your tests and end the environment when it's no longer needed.
Learn more [here](https://marketplace.visualstudio.com/items?itemName=Quali.build-release-task-torque).
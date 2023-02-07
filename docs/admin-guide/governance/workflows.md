---
sidebar_position: 15
title: Workflows
---

Torque role: Account admin

_Workflows_ allow you to schedule actions on all resources of a certain cloud provider (AWS or Azure) in the relevant environment. Each workflow is triggered at its scheduled time and can also be executed by the sandbox end-user from the resource's __Workflows__ tab.


:::tip Note
At this time, Workflows are supported only for VM esources.
:::

## How to add a workflow

1. Go to __Administration > Workflows__.
2. Click __Add Workflow__.
3. Fill in the details:
   * __Name__: Workflow name
   * __Display name__: Provide an informative one as this will be the Workflow's display name in the environment. For example, "Power off all Azure VMs EOD". 
   * __Description__
   * __Action__ to be performed in the environment. Workflows support all resource actions (__Power on__, __Power off__, __Restart__, __Connect__) as well as __Terminate__, which ends the environment. For details about resource actions, see [Run Day 2 Actions on Your Environment](/getting-started/Run%20day2%20actions).
   * __Spaces__: Toggle blue to apply the workflow to all spaces or select specific ones.
   * __Schedule__: Workflow's scheduled execution time. You can specify the time and day(s) using the editor, or toggle __Custom CRON__ to specify the schedule in CRON format.
   * __Allow overriding schedule on launch__: Toggle blue to enable the environment's end-user to manually run the workflow from the resource's __Workflows__ tab.
  
   For example:
  > ![Locale Dropdown](/img/workflow-1.png)
4. Click __Save__.





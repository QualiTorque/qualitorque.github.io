---
sidebar_position: 16
title: Workflows
---

Torque role: Account admin

__Workflows__ allow you to schedule actions on all resources of a certain cloud provider (AWS or Azure) in the relevant environment. For example, to power off all VMs daily at the end of the work day. Each workflow is triggered at its scheduled time and can also be executed manually by the end-user from the __Workflows__ tab of the environment's resource.


:::tip Note
Workflows are supported only for VMs, Database servers and K8s clusters.
:::

## How to add a workflow

1. Go to __Administration > Workflows__.
2. Click __Add Workflow__.
3. Fill in the details:
   * __Name__: Workflow name
   * __Display name__: Provide an informative one as this will be the Workflow's display name in the environment. For example, "Power off all Azure VMs EOD". 
   * __Description__
   * __Action__ to be performed in the environment. Workflows support all resource actions (__Power on__, __Power off__, __Restart__, __Connect__) as well as __Terminate__, which ends the environment. For details about resource actions, see [Run Day 2 Actions on Your Environment](/environment-services/Actions and workflows).
   * __Spaces__: Toggle blue to apply the workflow to all spaces or select specific ones.
   * __Schedule__: Workflow's scheduled execution time. You can specify the time and day(s) using the editor, or toggle __Custom CRON__ to specify the schedule in CRON format.
   * __Allow overriding schedule on launch__: Toggle blue to enable the environment's end-user to manually run the workflow from the resource's __Workflows__ tab.
  
   For example:
  > ![Locale Dropdown](/img/workflow-1.png)
4. Click __Save__.

Once you click "Save" a yaml file describing the workflow is automatically created. You can edit and customize this file according to your specific needs by clicking __Edit Yaml__.

## Workflow Yaml Syntax

```jsx title=workflow.yml
on:  // Optional. If this section is not present, the workflow will be run manually only and not automatically on schedule.
  overridable: true // set to true to allow the person launching environments to override the schedule during launch time. Defaults to false. 
  scheduler:
  - * * * * * // CRON expression, when to trigger the workflow. Multiple expressions are supported.
inputs:  // Optional
  input_name:
    default: "default value"
    overridable: true // set to true to allow end users to override the value of the input during launch time.
jobs:   // only a single job is currently supported
  job_title:
    name: job_name
    if: "liquid expression"
    steps:                  // Multiple steps are supported. They will be executed sequentially. 
    - name: step_name
      uses: action_name
      if: "liquid expression"
```

You can write the liquid expression using **context** which is provided automatically by Torque.

There are 2 types of contexts: one for the job, and one for the step.

## Job Context

The job context contains the following:
1. BlueprintName
2. Inputs (the inputs which the environment was launched with)
3. Duration (Duration of the environment)
4. LastAccessTime (The time when this environment was launched last)
5. BlueprintAvgHourlyCost (Blueprint hourly cost)

## Step Context

The step context contains a list of all the resources in the environment. 
For each resource the context contains:

1. name (Resource name)
2. type (Resource type)
3. identifier (Resource identifier)
4. attributes (A list of the resource attributes)

### Examples

```jsx title=job-condition-example
on:
  scheduler:
  - 0 9 * * *  // automatically trigger this workflow every day at 9AM
inputs:
  inactive_hours:
    default: 24     // we define an environment is inactive if it wasn't used in the last 24 hours
jobs:
  power-on-except-inactive:
    name: power on every day except inactive environments 
    if: >-
      {% capture last_accessed_sec %}{{ context.env.LastAccessTime | date: '%s' | minus: 0 }}{% endcapture -%}  // calculate the last time this env was accessed from job context
      {% capture inactive_sec %}{{ inputs.inactive_hours | times: 3600 }}{% endcapture -%} // calculate what is defined as inactivity period from the workflow inputs
      {% assign now = 'now' | date: '%s' | times: 1 -%}
      {% assign result = now | minus: last_accessed_sec -%}
      {% if result > inactive_sec -%}
          false
      {% else -%}
          true
      {% endif -%}
    steps:    
    - name: power-on-vm
      uses: power-on-vm
```

```jsx title=step-condition-example
...
jobs:
  power-off-steps:
    name: Power Off Except NetApp
    steps:
     - name: power-off-vm
       uses: power-off-vm
      if: "{% if context.resource.attributes.name == \"netapp\" -%}\n  true \n{% else -%}\n  false\n{% endif -%}"
```
---
sidebar_position: 10
title: Run Day 2 Actions on Your Environment
---

Now that you have a running environment, let's see what you can do in it.

All active and historic environment are listed in the space's __Environments__ page. Use the filters and search bar to quickly find what you're looking for. 

The image below is showing only the active ones. 

> ![Locale Dropdown](/img/environments-page.png)

The environment opens in the __Grains__ view, but you can switch to __YAML__ view to see the environment's YAML definition file, and __Resources__ view to see the environment's resources. You can click the grains and resources to see their details.

> ![Locale Dropdown](/img/environment-views.png)

Right above the main area you have the __Logs__, __Resources__, __Updates__, and __Detected Drift__ buttons.

> ![Locale Dropdown](/img/main-area-buttons.png)

## Updates and Detected Drift

Torque continuously monitors the environment as well as its source files and will notify you via the Updates and Detected Drift buttons if someone makes changes to the blueprint's asset or the environment's cloud resources while the environment is running. Click the relevant button  to view and resolve the changes. 

> ![Locale Dropdown](/img/updates-and-drift.png)

* __Updates__ shows changes made to the asset's definition file, allowing you to optionally update the environment
* __Drift Detection__ shows any of the environment's resources that were modified externally. Click the error to see the modifications, and __Reconcile__ to revert a resource back to its original state.


## Resource Actions and Workflows

Torque provides a built-in set of __Actions__ you can run on specific AWS and Azure VMs in the environment. These include __Power on__, __Power off__, __Restart__ as well as __Connect__, which creates an RDP or SSH connection to the VM directly from Torque. __Workflows__ are scheduled actions (created by your admin) that run on all VMs of a certain cloud provider (AWS or Azure) in all of the space's environments.

1. Switch to __Resources__ view.
2. Click a resource tile.
   > ![Locale Dropdown](/img/resources-view.png)
   The resource's __Actions__ as well as attributes and tags are displayed in the left pane.
3. Hover over the relevant action and click __Run__.
   > ![Locale Dropdown](/img/resource-actions.png)
4. Click the action's name to see its progress.
5. Click __Workflows__ to see which workflows apply to your environment.. Note that you can also manually run the workflows ahead of their scheduled run time. 
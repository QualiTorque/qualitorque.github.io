---
sidebar_position: 3
title: Actions & workflows
---

## Resource Actions and Workflows

Torque provides a built-in set of __Actions__ you can run on specific AWS and Azure VMs in the environment. These include __Power on__, __Power off__, __Restart__ as well as __Connect__, which creates an RDP or SSH connection to the VM directly from Torque. __Workflows__ are scheduled actions (created by your admin) that run on all VMs of a certain cloud provider (AWS or Azure) in all of the space's environments.

1. Switch to __Resources__ view.
   > ![Locale Dropdown](/img/resources-view.png)

2. Click a resource tile.

   The resource's __Actions__ as well as attributes and tags are displayed in the left pane.
3. Hover over the relevant action and click __Run__.
   > ![Locale Dropdown](/img/resource-actions.png)
4. Click the action's name to see its progress.
5. Click __Workflows__ to see which workflows apply to your environment. Note that you can also manually run the workflows ahead of their scheduled run time. 
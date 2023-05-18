---
sidebar_position: 2
title: Drift & Update
---

## Drift detection and Update of a running environment
Torque continuously monitors the environment as well as its source files and will notify you via the Updates and Detected Drift buttons if someone makes changes to the blueprint's asset or the environment's cloud resources while the environment is running. Click the relevant button  to view and resolve the changes. Drift and Update sometimes considered as Day2 operations as they apply to an already running environment and will affect existing/running resources.

> ![Locale Dropdown](/img/updates-and-drift.png)

* __Updates__ shows changes made to the asset's definition file, allowing you to optionally update the environment
* __Drift Detection__ shows any of the environment's resources that were modified externally. Click the error to see the modifications, and __Reconcile__ to revert a resource back to its original state.


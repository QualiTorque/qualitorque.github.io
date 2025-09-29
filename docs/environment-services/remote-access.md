---
sidebar_position: 3
title: Remote Access
---

Resources deployed and managed by Torque, can be enabled to __automatic remote access__ using RDP or SSH for environment consumers. This capability is specifically useful for VM workloads where environment consumers are used to work on the OS level and can get web-based access without cloud access or the need to handle VM authentication.

In the consumer view, click on the "connect" option or run the "Connect" action in the side pane on a resource that supports SSH or RDP connectivity.
> ![Resource Card](/img/resource-card.png)

Note: RDP or SSH connectivity is done using Torque's QualiX component that can be deployed per environment or shared between space environments or the entire account. QualiX is used as a proxy enabling to access from the consumer browser to the target VM using RDP or SSH communication.
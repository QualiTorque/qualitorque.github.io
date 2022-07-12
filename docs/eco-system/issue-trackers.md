---
sidebar_position: 4
title: Issue Trackers
---

With __Issue Trackers__ integrations, you can configure Torque to send sandbox lifecycle events to your bug tracking solution.

## Jira

This integration enables sending the sandbox events to specific issues in Jira. As part of the integration with Jira, you specify the Jira projects that can receive the events, and Torque will only send the events to a matching issue within those projects. 

The events are displayed in the __Comments__ section of the issues and look something like this:

> ![Locale Dropdown](/img/jira-notification.png)

In the above example, __DEV & Test Environment__ is the name of the environment and __started__ is the sandbox state.

:::tip __Note__
The sandbox name must start with the name of the Jira issue followed by a space. For example: "PJC-7 my sandbox" where PJC is the project key and 7 is the issue number.
:::

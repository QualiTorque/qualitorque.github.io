---
sidebar_position: 1
title: What is an Agent? 
hide_table_of_contents: true
---

The Torque agent is a small piece of code which is installed on your cloud and is used to communicate between your Torque SAAS tenant and your cloud.
The agent uses only outbound communication with Torque SAAS. It is stateless and very thin.
The agent is intended to be "always on" and runs all the time, checking with Torque for new tasks to perform.

When it receives a message about a new task (e.g. when an environment starts) it will spawn one or more runners that will launch the specific grain and then terminate. Runners may not need to be spawned if a suitable runner is already running.

The following diagram depicts the connectivity between the agent and Torque SAAS:

import pic1 from '/img/agent_connectivity.png';

<img src={pic1} style={{width: 900}} />

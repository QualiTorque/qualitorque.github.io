---
sidebar_position: 1
title: What is an Agent? 
---

The <ProductName /> Agent is a small piece of code which is installed on your cloud and is used to communicate between your <ProductName /> SAAS tenant and your cloud.
The agent uses only outbound communication with <ProductName /> SAAS. The agent is stateless and very thin.
The agent is "always on" and runs all the time, checking with <ProductName /> for new tasks to perform.

When the agent receives a message about a new task (launch an environment) it will spawn one or more runners that will launch the specific grain and then terminate. Runners may not need to be spawned if a suitable runner is already running.

The following diagram depicts the connectivity between the agent and <ProductName /> SAAS:

import pic1 from '/img/agent_connectivity.png';

<img src={pic1} style={{width: 900}} />
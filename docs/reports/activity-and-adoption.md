---
sidebar_position: 3
title: The Activity Report
---

The activity report provides detailed information about your Torque account usage and adoption.

Here are some examples of insights you can get from this report:

- Environment launch ternd 
- Active users trend (note: a user is considered active if he/she launched at least one environment in the defined timeframe)
- Wholistic view of environment statuses, including environments which need immediate attention
- Segmentation of environments according to space and blueprint
- Most active users
- Most and least used blueprints
- Environments running for the longest durations

Let's look at a real life example of usage of the activity report:

> ![Locale Dropdown](/img/reports-activity-1.png)
Looking at the "Environment Status" chart, we can see that there are currently 5 environments (1.9% of the total environments) for which the termination failed. Since their cloud resources may still be running and consuming cloud budget, this is something we probably want to look into.  
If we [cross filter](/reports/using-reports#cross-filtering) by these environments, we get all the report filtered by environments which failed to terminate properly. 

We can see the dates when these environments were launched: 
> ![Locale Dropdown](/img/reports-activity-2.png)

We can also see in which spaces these environments were launched:
> ![Locale Dropdown](/img/reports-activity-3.png)

As well as who launched it, and from what blueprints. 
We can use this information to understand if there is any anomaly or problem with one of the spaces, users or blueprints.
In this example, let's say that a significant portion of the environments that failed to terminate lauched. We can now cross filter also on this specific blueprint.

We can now drill down to see the environments themselves in the environments table:

> ![Locale Dropdown](/img/reports-activity-4.png)

Clicking on the link will direct us to the environment itself where we can analyze the situation and decide on the next actions.



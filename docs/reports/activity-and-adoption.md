---
sidebar_position: 3
title: The Activity Report
---

The activity report furnishes comprehensive details regarding the usage and adoption of your <ProductName /> account.

Here are examples of insights obtainable from this report:

- Trend in environment launches
- Trend in active users (Note: A user is deemed active if they have launched at least one environment within the defined timeframe)
- Holistic view of environment statuses, including those requiring immediate attention
- Segmentation of environments based on space and blueprint
- Identification of the most active users
- Evaluation of the most and least used blueprints
- Assessment of environments running for the longest durations

Let's examine a real-life application of the activity report:

> ![Locale Dropdown](/img/reports-activity-1.png)

Observing the "Environment Status" chart, we note that there are presently five environments (1.9% of the total environments) for which termination failed. Since their cloud resources may still be operational and consuming cloud budget, investigating this matter is advisable.
If we [cross-filter](/reports/using-reports#cross-filtering) by these environments, we get all the report filtered by environments which failed to terminate properly. 

We can discern the launch dates of these environments: 
> ![Locale Dropdown](/img/reports-activity-2.png)

Additionally, we can identify the spaces where these environments were launched:
> ![Locale Dropdown](/img/reports-activity-3.png)

As well as who launched it, and from what blueprints. 

This data enables us to identify anomalies or issues in specific spaces, users, or blueprints. For instance, if a substantial number of environments which failed to terminate were launched from a single blueprint, we can further cross-filter based on the specific blueprint.


To delve deeper, we can view the environments directly in the environments table:

> ![Locale Dropdown](/img/reports-activity-4.png)

Clicking on the link will redirect us to the environment itself, facilitating analysis and decision-making regarding the next steps.



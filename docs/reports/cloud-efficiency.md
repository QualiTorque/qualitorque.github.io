---
sidebar_position: 4
title: Cloud Efficiency Reports
---

# The Cost Report

The cost report provides detailed insights into how each business application contributes to the overall cloud bill, covering all cloud accounts and clusters. It also shows how these costs are distributed among the various teams and divisions within the organization.

Within this report, users can get a comprehensive understanding of:
- Current and historical cloud spend
- [Realized savings (achieved by Torque)](/reports/cloud-efficiency#realized-savings-report)
- [Potential savings](#potential-savings-report) and and strategies to achieve them

This report empowers users to answer key questions such as:

- How is each cloud account contributing to the total bill ?
- How is the total bill divided between the different spaces, blueprints and users? 
- Are there users who spend significantly more then their coleagues? 
- What are the most expensive environments?
- What are the most expensive blueprints?

Let's look at an example:

Checking the Cost by Spaces chart, we can see that the red space spend has significantly increased in the last couple of days:

> ![Locale Dropdown](/img/reports-cost-1.png)

We can now [cross-filter](/reports/using-reports#cross-filtering) by this space to understand what's causing this and if this is expected or not.

# Realized Savings Report


The Realized Savings Report provides a comprehensive overview of the cost savings achieved through the use of Torque. By employing Torque's [actions and workflows](/environment-services/Actions%20and%20workflows) after the deployment of environments, users can efficiently (manually or automatically) start and stop cloud resources within an environment when they are not in use. When resources are stopped, users avoid incurring costs, resulting in tangible savings on cloud expenses.

Torque actively monitors the status of resources in each environment, distinguishing between running and stopped states. The occurences where resources are stopped, facilitated by Torque actions, contribute to the realized savings. The report offers a macroscopic view of overall savings, allowing users to comprehend the impact of their actions and workflows.

> ![Locale Dropdown](/img/reports-realized-1.png)

In addition, users can zoom in on specific environments to gain a detailed understanding of their savings patterns:

> ![Locale Dropdown](/img/reports-realized-2.png)

In the provided example, an environment comprising 8 virtual machines exhibited intermittent power states over the past week, predominantly in a powered-off state, with one day of continuous operation. By accessing the environment, users can inspect workflows and actions to assess whether this behavior aligns with expectations or if optimization opportunities exist.

Moreover, users can delve into specific resources to examine their individual behaviors and contribute to a more granular analysis.

# Potential Savings Report

The potential savings report identifies additional oportunities to save cloud spend.
Torque is running advanced machine learning on metrics collected from your cloud, to understand if there are cloud resources which are running (i.e. cost money) but sitting idle which means they are not used by the users. 
---
sidebar_position: 1
title: Roles in Torque
---


There are 4 roles in Torque:
* **Account Admin** has full permissions in all Torque spacesspaces, and can access the Adminstration area, which is not accessible to space admins. The account admin is responsible for setting up Torque for the first time, general supervision and ongoing maintenance. This includes account-level responsibilities, like inviting users to the Torque account, creating spaces, and adding cloud account and Kubernetes compute services, general supervision and ongoing maintenance, and must be able to operate as a space administrator.
* **Space Admin** has admin access to specific space(s). This user performs space-level administration, like managing the space's users and their roles, linking the bluperint repository, managing the space policies and tags, and viewing cost data. 
* **Space Developer** tracks the space's usage and cost. As such, this user also manages the tags that are attached to each cloud resource luanched as part of the space's environmnents.
* **Space Member** is the end-user of the environment. This user browses the blueprint catalog and launches the environment they need. Typical examples of a space member include a developer who is tasked with creating the blueprint, and a QA specialist who needs to run validation tests before pushing the updates to production.


## Role permissions

| Permission      | Account admin | Space admin | Space developer   | Space member |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| Add / Remove Cloud Accounts	   | ![Locale Dropdown](/img/green-dot.png)      |||||
| Create Spaces	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Integrate IDP	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Create Roles	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Full access to all spaces	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Invite new account admins	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Manage account tags	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Launch sandboxes   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|  ![Locale Dropdown](/img/green-dot.png)|
| Publish blueprints	   | ![Locale Dropdown](/img/green-dot.png)       |||||
| Manage production environments	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)|||
| Setup blueprint repositories	   | ![Locale Dropdown](/img/green-dot.png)        ||||
| Manage space users & roles	   | ![Locale Dropdown](/img/green-dot.png)        ||||
| Get information on Cloud Account	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |||
| View cost data	   | ![Locale Dropdown](/img/green-dot.png)        |![Locale Dropdown](/img/green-dot.png)  |![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|
| Manage space tags	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Manage space policies	   | ![Locale Dropdown](/img/green-dot.png)        |||||
| Manage blueprint tags	   | ![Locale Dropdown](/img/green-dot.png)|![Locale Dropdown](/img/green-dot.png)|||
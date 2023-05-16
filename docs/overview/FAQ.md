---
sidebar_position: 18
title: FAQ
hide_table_of_contents: true
---

### Why should I use Torque if I can manage my application deployments directly on the cloud or through my CI/CD tool?
To answer this question, we'll focus on 3 basic factors: security, collaboration and cost-savings. There are additional factors like governance, policies, and more, but we can save those for later.

* __Security__: To develop cloud applications, your developers first access the cloud with your admin credentials. These are highly valuable details that must be protected at all costs, and should not be shared liberally. With Torque, the admin feeds these credentials to Torque and they are safeguarded from your application developers and end-users, who only need to access Torque in order to launch their cloud environments, with Torque handling the authentication behind the scenes.

* __Collaboration__: Torque allows you to cultivate team projects in spaces, where all the team's members have access to their cloud assets, and can work together on different environments.

* __Cost-savings__: Whenever you work on the cloud, you run the risk of forgetting to clean up the cloud resources when you're done. This is a major spend for all cloud-savvy organizations, which are forced to use business mapping solutions to find and remove those long-forgotten assets. This is not the case with Torque, which completely deletes all of the environment's cloud infrastructure when the environment is no longer needed. In addition, Torque attaches different tags to each and every cloud resource it deploys, providing you with powerful monitoring capabilities and a comprehensive cost dashboard to help you analyze your current and forecasted cloud spend. The cost data is preserved even after the environments have ended and their cloud resources deleted.

### Where are the applications deployed?
For security and performance reasons, we designed Torque to deploy applications on Kubernetes (EKS on AWS EC2 and AKS on Azure). Support for additional cloud providers is currently in development and will be released soon.

### Can I automate the deployment of Torque blueprints through a CI/CD process?
Absolutely, Torque supports integration with some of the leading CI/CD tools out there, including Jenkins, Bamboo, CircleCI, TeamCity, GitHub Actions, and more. Click [here](/overview/supported-platforms#cicd-tooling) and follow our documentation to set up your pipelines and start seeing value.

### How do you protect my access credentials?
It's no secret that working with the cloud requires the use of very powerful admin credentials, which can cause some serious damage if they fall in the wrong hands. In Torque, your admin credentials are safely tucked away in the system, within what we call Torque agents, which allow Torque to access and use the Kubernetes cluster on the cloud. The blueprints reference the agents but otherwise cannot access the credentials. Same goes for the end-user and CI/CD tool, the end-users who launch the environments don't have access to the to the actual Azure keys from the token.

### What happens when I no longer need the environment?
Torque environments have a duration period, which autoamatically ends the environment, deleting all the environment's cloud artifacts from the cluster. In addition, Torque allows you to manually end the environment at any time directly from the Torque application. The bottom line is that nothing from the environment is left on the cloud.

### Can I limit the duration of environments?
Of course. The blueprint designer reserves the right to set a duration policy, per blueprint, which sets the maximum duration for that particular blueprint. So you can limit the blueprint to a certain time frame, which is especially useful for high-cost blueprints, or let it run indefinitely for environments that need to be online at all times.

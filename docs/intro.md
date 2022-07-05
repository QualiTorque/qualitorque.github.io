---
sidebar_position: 1
slug: /
custom_edit_url: null
title: Welcome to Torque!
---


## APPLICATION ENVIRONMENTS - Anytime. Anywhere.
Hello, and welcome to Torque. 

**Torque** is a SaaS platform that specializes in delivering Infrastructure Automation at Scale for complex, application-centric environments on cloud technologies including AWS, Azure, and Kubernetes. IT leaders and DevOps innovators around the world trust Quali to enable self-service automation and governance to streamline application development, testing, and release to production.

Torque is not here to reinvent the wheel, and seemlessly integrates with your application deployment tool of choice. So whether you're using Terraform modules, Helm chats, CloudFormation templates or some other tool, Torque will know how to deploy your application-as-code on the cloud. Using a tool-agnostic approach, you define blueprint templates in YAML files, which reference your application code, and publish them to your end-users through a self-service catalog or automate their deployment and testing via a CI/CD process. When a blueprint is launched, Torque orchestrates the deployment of the blueprint's application stack and notifies the end-user by email when the environment is fully deployed and ready to be used.

### Why should I use Torque if I can manage my application deployments directly on the cloud or through my CI/CD tool?
To answer this question, we'll focus on 3 basic factors: security, collaboration and cost-savings. There are additional factors like governance, policies, and more, but we can save those for later.

* __Security__: To develop cloud applications, your developers first access the cloud with your admin credentials. These are highly valuable details that must be protected at all costs, and should not be shared liberally. With Torque, the admin feeds these credentials to Torque and they are safeguarded from your application developers and end-users, who only need to access Torque in order to launch their cloud environments, with Torque handling the authentication behind the scenes.

* __Collaboration__: Torque allows you to cultivate team projects in spaces, where all the team's members have access to their cloud assets, and can work together on different environments.

* __Cost-savings__: Whenever you work on the cloud, you run the risk of forgetting to clean up the cloud resources when you're done. This is a major spend for all cloud-savvy organizations, which are forced to use business mapping solutions to find and remove those long-forgotten assets. This is not the case with Torque, which completely deletes all of the environment's cloud infrastructure when the environment is no longer needed. In addition, Torque attaches different tags to each and every cloud resource it deploys, providing you with powerful monitoring capabilities and a comprehensive cost dashboard to help you analyze your cloud spend. The cost data is preserved even after the environments have ended and their cloud resources deleted.

### Where are the applications deployed?
For security and performance reasons, we designed Torque to deploy applications on Kubernetes (EKS on AWS EC2 and AKS on Azure). Support for additional cloud providers is currently in development and will be released soon.

### Can I automate the deployment of Torque blueprints through a CI/CD process?
Absolutely, Torque supports integration with some of the leading CI/CD tools out there, including Jenkins, Bamboo, CircleCI, TeamCity, GitHub Actions, and more. Click [here](/eco-system/ci-cd) and follow our documentation to set up your pipelines and start seeing value.

### How do you protect my access credentials?
It's no secret that working with the cloud requires the use of very powerful admin credentials, which can cause some serious damage if they fall in the wrong hands. In Torque, your admin credentials are safely tucked away in the system, within what we call Torque compute services, which allow Torque to access and use the Kubernetes cluster on the cloud. The blueprints reference the compute services but otherwise cannot access the credentials. Same goes for the end-user and CI/CD tool, they have Torque permissions to launch blueprints, while Torque manages the authentication process transparently and securely directly against the cluster.

### What happens when I no longer need the environment?
Torque environments have a duration period, which autoamatically ends the environment, deleting all the environment's cloud artifacts from the cluster. In addition, Torque allows you to manually end the environment at any time directly from the Torque application. The bottom line is that nothing from the environment is left on the cloud.

### Can I limit the duration of environments?
Of course. The blueprint designer reserves the right to set a duration policy, per blueprint, which sets the maximum duration for that particular blueprint. So you can limit the blueprint to a certain time frame, which is especially useful for high-cost blueprints, or let it run indefinitely for environments that need to be online at all times.

## New to Torque? A quick demo is all you need: 
<div align="center">
  <a href="https://youtu.be/kMbJ7IRDV7w"><img src="https://img.youtube.com/vi/kMbJ7IRDV7w/0.jpg" alt="torque"></img></a>
</div>


## From our customers:
> *“Our back-end systems and applications are complex. They need to be. But, for us to expand at the level of growth that we were experiencing, we needed flexibility and alignment throughout our DevOps lifecycle. We weren’t going to get there with our globally distributed development teams sharing static staging environments. We could either tell our DevOps teams to share the keys to the cloud — which wasn’t going to happen — or we could find a solution.”* – **Pavel Eliav, Head of DevOps, Resident**

## Ready to start?
In the next section you will go thorught the initial steps in creating a Torque account, running the Torque built-in sampels and finally running yourown workload in the system. let's go!

 


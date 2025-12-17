---
sidebar_position: 3
title: Install our Agent
---
__<ProductName /> Control plane__ offers centralized orchestration and management for Kubernetes orchestration tools such as Kubernetes manifest, Helm and Crossplane. In this guide, we will go over some of <ProductName /> basic features allowing quick onboarding of Kubernetes automation assets into the platform, standardization of Kubernetes orchestration using blueprints and securing deployment process using tagging, policies and RBAC.

In this quick-start guide, we will cover the following topics:
1. Create a new <ProductName /> Space
2. Onboard a GitHub repository and discover the automation assets in it
3. Generate your first blueprint and modify it to include deployment credentials
4. Launch a blueprint and get access to the deployed resource in the newly created environment

> NOTE: This guide will focus on Kubernetes manifest and Helm orchestration, [click here](/overview/supported-platforms.md) for more information about <ProductName /> supported platform.

## Step #1: Create a space
:::info
__Spaces__ are logically separate area that contains an association to one or more agents, asset and blueprint repositories and set of permitted users. Spaces can be used to logically separate between teams, projects, or even development lifecycle stages and allow the relevant end-users, administrators and blueprint designers to access only the relevant blueprints and environments.
:::

1. To create a new space, use one of the following methods: 
   * Navigate to the "Administration" section and open the "Spaces" tab. This is the account space management section where you will be able to create, edit and delete spaces. 
   * In the spaces dropdown, located in the left side-menu, click on "Create new space"

2. Set the space name, image and color. 
   Space name, image and color can always be changes in the "Administration" are under the "Spaces" tab

## Step #2: Connect a repository
Now, that you have a new space configured, we will associate a repository to the space and generate blueprints using the automation-assets that will be discovered by <ProductName /> in that repository. We recommend using your-own repository hosted in one of the supported Git Providers. For using on-prem/hosted versions of one of the supported (Version Control System) providers, see [Repository Setup](/admin-guide/source-control/source-control-github).

1. In the __repository onboarding__ wizard, choose your VCS provider, provide the repository URL and click "Connect". <ProductName /> will open a new windows where you will be requested to authenticate to the VSC provider. VCS providers work differently, but usually, a token will be generated for your user and <ProductName /> will use that for any communication with that VCS. 

2. Click "Discover Assets" to initiate the __Torque asset discovery process__ that will go over the repository and highlight the automation assets <ProductName /> discovered.
3. To __generate a blueprint__ from one of the discovered assets, check the blueprint in the list and click on "Generate Blueprints"
4. Click on "Connect an Agent"


import pic1 from '/img/getting-repository-ongoarding.gif';

<img src={pic1} style={{width: 700}} />

## Step #3: Install an Agent
In this step, we will configure a <ProductName /> agent that will execute, manage and monitor the Kubernetes workload we discovered and plan to deploy.

1. In the "Connect an agent" dialog, select the __"Install new self hosted agent"__ and click "Next". Now, you are required to choose one of the supported cloud providers managed Kubernetes service or a self-managed Kubernetes cluster. Choose one of the options, In this example, we will use AWS EKS.
2. Provide a new for the agent, and click "Next"
3. Click on "Generate", this will generate a CLI command based on ```kubectl``` that you can now execute on the Kubernetes cluster. Here is an example output of the command. 


import pic2 from '/img/k8s-agent-connected.png';

<img src={pic2} style={{width: 700}} />


:::info
The command creates a new namespaces, and deploys the <ProductName /> agent in it. It might take up to 2 minutes for the Agent to get up and running, so want for the <ProductName /> self-service indication to make sure the agent is connected.

1. Now, it's associate our newly connected agent with our space. Click the "Associate to space".
2. The space is already selected for you, but, you still need to set the default namespace and service-account that will be used by <ProductName /> to deploy workloads into the cluster. It's always possible to change the default values in the "Administration" section under the "Agents" section.
:::

## Step #4: Launch an Environment

 🚀🚀 Congrats! you are finally now ready to launch your first environment!  🚀🚀

1. To expose the new blueprint into the __Space catalog__, navigate into the __Blueprints__ page and toggle the  __Publish__ option.
2. Navigate to the __Catalog__ and click the __Launch__ button on the blueprint card.
3. Specify the environment's name, duration, tags and inputs - note that some of the inputs may be the authentication information required for AWS or Azure as describes in step #3.
4. Optionally assign collaborators to the environment. While everyone in the space has "read" permission to its environments, only the environment's owner and collaborators can perform actions that change the environment: extend end the environment, reconcile or update resource changes, etc. When launching the environment, the new owner/collaborators will receive a notification email if you have [Notifications](/admin-guide/notifications) configured in the space.
5. Finally, click __Launch__.
6. Wait until the environment is active and use as needed. URLs to the environment's applications are typically provided as outputs - these can be found in the environment's __Quicklinks__ on the right pane.
7. Check out the __Resources__ pane to get details about your environment's resources. Use this tab to understand what assets each grain spun up, get connection details to specific resources, and more.

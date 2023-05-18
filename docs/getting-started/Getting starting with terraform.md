---
sidebar_position: 2
title: Getting Started with Terraform
---
__Torque Control plane__ offers centralized orchestration and management for Terraform and other IaC tools. In this guide, we will go over some of Torque basic features allowing quick onboarding of Terraform modules into the platform, standardization of Terraform automation using blueprints and securing deployment process using tagging, policies and RBAC.

In this quick-start guide, we will cover the following topics:
1. Create a new Torque Space
2. Onboard a GitHub repository and discover the automation assets in it
3. Generate your first blueprint and modify it to include deployment credentials
4. Launch a blueprint and get access to the deployed resource in the newly created environment

> NOTE: This guide will focus on AWS and Azure Terraform workloads, [click here](/overview/supported-platforms.md) for more information about Torque supported platform.

## Step #1: Create a new Torque Space
:::info
__Spaces__ are logically separate area that contains an association to one or more agents, asset and blueprint repositories and set of permitted users. Spaces can be used to logically separate between teams, projects, or even development lifecycle stages and allow the relevant end-users, administrators and blueprint designers to access only the relevant blueprints and environments.
:::

1. To create a new space, use one of the following methods: 
   * Navigate to the "Administration" section and open the "Spaces" tab. This is the account space management section where you will be able to create, edit and delete spaces. 
   * In the spaces dropdown, located in the left side-menu, click on "Create new space"

2. Set the space name, image and color. 
   Space name, image and color can always be changes in the "Administration" are under the "Spaces" tab
> ![Create Space](/img/getting-space.png)


## Step #2: Onboard a Git Repository & Auto-Discover automation assets
Now, that you have a new space configured, we will associate a repository to the space and generate blueprints using the automation-assets that will be discovered by Torque in that repository. We recommend using your-own repository hosted in one of the supported Git Providers. For using on-prem/hosted versions of one of the supported (Version Control System)) providers, see [Repository Setup](/admin-guide/source-control/source-control-github).

1. In the __repository onboarding__ wizard, choose your VCS provider, provide the repository URL and click "Connect". Torque will open a new windows where you will be requested to authenticate to the VSC provider. VCS providers work differently, but usually, a token will be generated for your user and Torque will use that for any communication with that VCS. 
> Note: you can always use [this](https://github.com/QualiTorque/Sample-Terraform) example repository with some pre-existing automation assets.

2. Click "Discover Assets" to initiate the __Torque asset discovery process__ that will go over the repository and highlight the automation assets Torque discovered.
3. To __generate a blueprint__ from one of the discovered assets, check the blueprint in the list and click on "Generate Blueprints"
4. Click on "Connect an Agent"

> ![Onboard Repository](/img/getting-repository-ongoarding.gif)

## Step #3: Modify blueprint to use the Quali Hosted agent
In this step, we will configure our newly created blueprint (Created in step #2) to use "Quali Hosted Agent"

:::info
__Quali Hosted Agent__ is a free pre-configured agent hosted by Quali allowing you to execute automation without the need to install, configure and maintain a "self hosted agent". In case you wish to use your own agent, follow the steps in [this](/torque-agent/Install-and-connect-self-hosted-agent) article and continue to step #4 in this article once you fully configured your agent.
:::

1. In the "Connect an agent" dialog, select the __"Quali Hosted Agent"__. This will associate the "Quali Hosted Agent" with the newly created space allowing automation in the space to be execute on it.
2. Open one of the generated blueprints generated in the previous steps by clicking on it's name in the "blueprints name". You will see the blueprint YAML generated for the automation asset. The YAML contains all the inputs and outputs of the Terraform module alongside  some additional information about the location of the automation asset in the VCS repository.
3. In the following step, we will modify the blueprint using the __YAML editor__ adding authentication information for AWS or Azure so our Terraform module will be executed on them. This section is AWS or Azure specific, so make sure to follow the section matching your cloud provider.

### AWS authentication 
The Quali-hosted agent needs your __AWS credentials__ to provision the environment on your AWS account. We will edit the blueprint to add the AWS credentials as environment variables, and expose them as inputs so it will be easier to provide them upon launch of a new environment. Editing the blueprint in the blueprint editor provides syntax highlighting, auto-correcting and live validation of the YAML and data provided. Make sure to click on "Save Changes" when updating the YAML to make sure the blueprint is saved in Torque.

1. Add the following inputs under the input section of the blueprint:

```yaml
inputs:
  AWS_ACCESS_KEY:
    type: string
  AWS_SECRET_KEY:
    type: string
```

2. Add the following environment variables under the env-var section of the blueprint. For more information about generating AWS credentials, see the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)

```yaml
      env-vars: 
        - AWS_ACCESS_KEY: '{{ .inputs.AWS_ACCESS_KEY }}'
        - AWS_SECRET_KEY: '{{ .inputs.AWS_SECRET_KEY }}'
```


### Azure authentication 
The Quali-hosted agent needs your __Azure credentials__ to provision the environment on your Azure account. We will edit the blueprint to add the Azure credentials as environment variables, and expose them as inputs so it will be easier to provide them upon launch of a new environment. Editing the blueprint in the blueprint editor provides syntax highlighting, auto-correcting and live validation of the YAML and data provided. Make sure to click on "Save Changes" when updating the YAML to make sure the blueprint is saved in Torque.


1. Add the following inputs under the input section of the blueprint:
```yaml
  ARM_CLIENT_ID:
    type: string
  ARM_CLIENT_SECRET:
    type: string
  ARM_SUBSCRIPTION_ID:
    type: string
  ARM_TENANT_ID:
    type: string
```
2. Add the following environment variables under the env-var section of the blueprint. For more information about generating Azure credentials, see the [Azure documentation](https://learn.microsoft.com/en-us/azure/developer/terraform/authenticate-to-azure)
```yaml
      env-vars: 
        - ARM_CLIENT_ID: '{{ .inputs.ARM_CLIENT_ID }}'
        - ARM_CLIENT_SECRET: '{{ .inputs.ARM_CLIENT_SECRET }}'
        - ARM_SUBSCRIPTION_ID: '{{ .inputs.ARM_SUBSCRIPTION_ID }}'
        - ARM_TENANT_ID: '{{ .inputs.ARM_TENANT_ID }}'        
```

## Step #4: Launch your blueprint

At this point, you have done the following:
* Created a new space
* Connected an asset repository and autogenerated blueprints out of some assets
* Associated an agent that will handle the deployment and teardown of the environments

 🚀🚀 You are finally now ready to launch your first environment!  🚀🚀

1. To expose the new blueprint into the __Space catalog__, naviate into the __Blueprints__ page and toggle the  __Publish__ option.
2. Navigate to the __Catalog__ and click the __Launch__ button on the blueprint card.
3. Specify the environment's name, duration, tags and inputs - note that some of the inputs may be the authentication information required for AWS or Azure as describes in step #3.
4. Optionally assign collaborators to the environment. While everyone in the space has "read" permission to its environments, only the environment's owner and collaborators can perform actions that change the environment: extend end the environment, reconcile or update resource changes, etc. When launching the environment, the new owner/collaborators will receive a notification email if you have [Notifications](/admin-guide/notifications) configured in the space.
5. Finally ,click __Launch__.
    
6. Wait until the environment is active and use as needed. URLs to the environment's applications are typically provided as outputs - these can be found in the environment's __Quicklinks__ on the right, or in the __Parameters__ pane.
   > ![Locale Dropdown](/img/outputs.gif)
7. Check out the __Resources__ pane to get details about your environment's resources. Use this tab to understand what assets each grain spun up, get connection details to specific resources, and more.
   > ![Locale Dropdown](/img/resource-details.gif)

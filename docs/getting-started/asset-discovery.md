---
sidebar_position: 8
title: Asset Discovery
---

Torque needs access to your relevant git repositories to read your Terraform modules or Helm charts.
Torque supports 4 version control systems: GitHub, GitLab, BitBucket, and Azure DevOps.

Once a repository is connected, Torque will automatically discover the assets in it (Terraform modules, Helm charts, Kubernetes manifests, CloudFormation templates, and batch scripts. See the full list [here](/overview/supported-platforms).) and will ask you to select the assets to be used for the blueprints. After you select the relevant assets, Torque will automatically generate initial blueprints from your assets.

:::tip __Note__:

Enabling Self-Service or Building Block on an IaC asset wraps it in a blueprint behind the scenes — you won't see or edit that blueprint's raw YAML directly, but you can customize its display name, icon, and labels. See [Blueprint Design](/blueprint-designer-guide/blueprint-quickstart-guide) for the full picture, including how to build multi-grain blueprints yourself.

:::

**To connect your repository:**
1. Go to your space, and select __Automation > Repositories__ from the left pane. 
2. Click **Add Repository** and follow the instructions.
    
    To connect an Azure DevOps repo, use this format: `https://dev.azure.com/{organization}/{project}/_git/{repositoryName}`.

    > ![Connect Repo](/img/getting-repository-onboarding.png)

3. After you click on the **Connect** button, Torque will import any IaC assets, blueprints and workflows from this repository.

4. Next, go to the **Automation Inventory** page, and publish (show in Self-Service) any relevant blueprint or IaC asset. You can also mark these assets as building-blocks, to be used inside other blueprints later on.

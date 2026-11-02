---
sidebar_position: 3
title: Install Torque Agent
---
__Torque Control plane__ offers centralized orchestration and management for Kubernetes orchestration tools such as Kubernetes manifest, Helm and Crossplane. In this guide, we will go over some of Torque basic features allowing quick onboarding of Kubernetes automation assets into the platform, standardization of Kubernetes orchestration using blueprints and securing deployment process using tagging, policies and RBAC.

In this quick-start guide, we will cover the following topics:
1. Create a new Torque Space
2. Connect a Git repository and let Torque discover the automation assets in it
3. Install an agent on your Kubernetes cluster and associate it with the space
4. Launch a blueprint and get access to the deployed resources in the newly created environment

> NOTE: This guide will focus on Kubernetes manifest and Helm orchestration, [click here](/overview/supported-platforms.md) for more information about Torque supported platform.

## Step #1: Create a space
:::info
__Spaces__ are logically separate areas that contain an association to one or more agents, asset and blueprint repositories, and a set of permitted users. Spaces can be used to logically separate teams, projects, or even development lifecycle stages, and allow the relevant end-users, administrators, and blueprint designers to access only the relevant blueprints and environments.
:::

1. To create a new space, use one of the following methods:
   * Expand the **Admin** section at the bottom of the left sidebar, click **Spaces**, and click **Create Space**. This is the account space management page where you can create, edit, and delete spaces.
   * Open the space selector at the top of the page and click **Create a new Space**.

2. In the **Create your Space** dialog, fill in the **Space Details**: the **Space Name**, a **Space Color**, and a **Space Icon**, then click **Create**.

   Torque switches to the new space, opens its (empty) **Self-Service** catalog, and immediately opens the **Connect a repository** dialog described in Step #2. If you close that dialog, the space still exists and you can connect the repository later from **Automation > Repositories**.

   The space name, icon, and color can always be changed later from **Admin > Spaces** using the space's **⋮** menu.

## Step #2: Connect a repository
Now that you have a new space configured, we will connect a repository to the space and let Torque discover the automation assets in it. We recommend using your own repository hosted in one of the supported Git providers. For on-prem/hosted versions of the supported version control systems, see [Repository Setup](/admin-guide/source-control/source-control-github) and [Self Hosted Repositories](/admin-guide/source-control/Self%20Hosted%20Repositories/overview).

1. In the **Connect a repository** dialog that opens after the space is created (or, later, in your space under **Automation > Repositories** by clicking **Add Repository**), select your Git provider: **BitBucket**, **GitHub**, **GitLab**, **Azure DevOps**, **CodeCommit**, or **CloudShell**.
2. In the **Repository details** step, enter the **Repository URL**, a **Repository Name**, and optionally a **Branch**.
3. Under **Credentials**, choose **Select from Credentials Store** and pick existing credentials for this provider, or choose **Create New Credentials** and enter a **Credentials Name** and the provider's access token. For the provider-specific fields, see [Repository Setup](/admin-guide/source-control/source-control-github).
4. Click **Connect**. Torque scans the repository and shows a **Successfully connected to** summary with the number of assets that were discovered and are now managed in the space. Blueprint YAML files under the repository's `blueprints` folder are added to the space automatically.
5. Click **Explore in IaC Assets Page** (or go to **Automation > Automation Inventory** and open the **IaC Assets** tab). Each discovered asset is listed with its **Type**, **Self-Service** and **Building Block** toggles, **Status**, **IaC Local Path**, and **Repository Name**. Toggle **Self-Service** for the asset you want to launch. Torque wraps the asset in a blueprint behind the scenes and adds it to the Self-Service catalog. For details, see [Blueprint Design](/blueprint-designer-guide/blueprint-quickstart-guide).



import pic1 from '/img/getting-repository-onboarding.gif';

<img src={pic1} style={{width: 700}} />

## Step #3: Install an Agent
In this step, we will connect a Torque agent that will execute, manage, and monitor the Kubernetes workloads we discovered and plan to deploy. A new space has no agent yet: its **Resources → Agents** page shows **Connect an Agent** ("To eventually launch environments, an Agent is required").

1. In the space, go to **Resources → Agents** and click **New Agent** to open the **Connect an Agent** wizard.
2. In the **Setup** step, choose **Cloud**, then **Public Cloud**, and select the tile of your managed Kubernetes provider (**Azure**, **AWS**, **GCP**, or **Oracle**) or the generic **Kubernetes** tile for a self-managed cluster. In this example, we use AWS EKS. Click **Next**.
3. In the **Generate Agent** step, fill in the **Agent Name** and optionally the **Location**, then click **Next**.
4. In the **Installation Instructions** step, copy the generated `kubectl` command and run it against your Kubernetes cluster.


import pic2 from '/img/k8s-agent-connected.png';

<img src={pic2} style={{width: 700}} />


:::info
The command creates a new namespace and deploys the Torque agent in it. It might take up to 2 minutes for the agent to get up and running, so wait for the **Connected** indication in the **Connections Status** panel.
:::

5. Click **Associate to Space**. In the **Associate the Agent to your Space** dialog, select the **Space**, and set the **Default Namespace** and **Default Service Account** that Torque will use to deploy workloads into the cluster, then click **Associate**. You can change these defaults later from the agent's **⋮ > Manage Spaces** menu in **Resources → Agents**. For details, see [Install an Agent on your Kubernetes Cluster](/agent/Install-and-connect-self-hosted-agent).

## Step #4: Launch an Environment

 🚀🚀 Congrats! You are now ready to launch your first environment!  🚀🚀

1. Make sure the blueprint or IaC asset is published: in **Automation > Automation Inventory**, the **Self-Service** toggle of the item must be on (inside a blueprint, the **Self Service** button reads **Hide from Catalog** while it is published). See [Publishing to the Self-Service Catalog](/blueprint-designer-guide/blueprint-publishing).
2. Go to **Self-Service** and click **Launch** on the blueprint card.
3. Specify the environment's name, duration, tags, and inputs. Some of the inputs may be the credentials or agent required to deploy, as described in Step #3.
4. Optionally assign collaborators to the environment. While everyone in the space has "read" permission to its environments, only the environment's owner and collaborators can perform actions that change the environment: extend or end the environment, reconcile or update resource changes, and so on. When launching the environment, the new owner/collaborators receive a notification email if you have [Notifications](/admin-guide/notifications) configured in the space.
5. Finally, click __Launch__.
6. Wait until the environment is active and use it as needed. URLs to the environment's applications are typically provided as outputs - these can be found in the environment's __Quick Access__ links.
7. Check out the __Resources__ tab to get details about your environment's resources. Use this tab to understand what assets each grain spun up, get connection details to specific resources, and more.

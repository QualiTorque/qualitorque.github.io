---
sidebar_position: 3
title: Blueprint Quickstart Guide
---

Now that you have seen how Torque works, it’s time to link your assets to Torque and see how easy what you can do with them.

## Prerequisites

* Space
* Asset repository associated to the space
* Execution host associated to the space

## Let Torque autogenerate blueprints from your assets

Torque launches environments out of blueprints, which are YAML files that represent the environments. So the first step is to create blueprints out of your existing assets.

1. In your space, go to __Settings > Repositories__ and discover your assets.

> ![Locale Dropdown](/img/discover-assets.png)

2. Select the assets you want Torque to discover and click __Generate Blueprints__.
  
  Torque creates a blueprint YAML for each asset, and lists the blueprints in your space’s __Blueprints__ page. You can click the blueprint to see the YAML file.

> ![Locale Dropdown](/img/new-assets.png)

3. __Publish__ the blueprints and you’re good to go.

> ![Locale Dropdown](/img/publish-blueprint.png)
  
  You and your space’s users can now launch these environments from the space.

  In some cases, you may need to adjust your autogenerated blueprints. For details on what you can do, see [Autogenerated Blueprints](/blueprint-designer-guide/autogenerated%20blueprints).

## Create a multi-asset blueprint
So far, we’ve learned how to create single-asset blueprints. But what if you want to create an application-stack environment? This is easily done by nesting single-asset blueprints within a master blueprint as grains. Each grain represents a single-asset blueprint, which can be an application or cloud service deployed via an asset, like a Terraform module, Helm chart, or CloudFormation template, to name a few.

For additional information, see [Blueprint YAML](/blueprint-designer-guide/blueprints).
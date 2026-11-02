---
sidebar_position: 5
title: Blueprints Auto-generation
---

## Torque auto-generated blueprints
Torque auto-generated blueprints based on your assets (Terraform modules, Helm Charts). However, you may need to adjust these blueprints to your specific needs. You can modify auto-generated blueprints directly in Torque or in your preferred editor.

### Common fields

- **spec_version** should not be changed. 
- **description** may be changed to a better description for your blueprint.
- **inputs**: Torque generates the inputs based on the inputs in your module. The blueprint inputs are presented to the end user when they launch the blueprint, so they can fill out the inputs and/or override any defaults. These inputs will be the module's inputs upon deployment. 
Remove any inputs you don't want to expose in the deployed environment.

### Terraform-specific fields

Torque currently supports only simple types as blueprint inputs for Terraform (string, boolean and numbers). The inputs that have been auto-generated for you are all "simple type" inputs from your module.

### agent
- **agent**: The kubernetes execution agent that will deploy the environment.

- **outputs**: Torque generates the outputs based on the outputs of your module. The blueprint's outputs are presented to the end user when they are ready (in the deployed environment). 
Remove any outputs you don't want to expose when the environment is deployed.
- **tf-version**: The terraform version to be used to deploy the module. Change it according to your needs. 

### Helm auto-generated blueprints

Torque currently supports only simple types as blueprint inputs for Helm (string, boolean and numbers). The inputs that have been auto-generated for you are all "simple type" inputs from your Helm chart.

- **commands**: A list of Helm commands to run before installing the chart.
No need to specify the Helm command itself.
e.g, for the command "helm plugin install [options] `<path|url>`... [flags] " type "plugin install [options] `<path|url>`... [flags]".
       
```jsx title="For example:"
inputs:
    obj.replicaCount:
        type: ''
        display-style: normal
        default: 1
``` 

The commands run from the root directory of the repository.

You can reference the default __values.yaml__ file as `{CHART_ROOT_PATH}/values.yaml`.
and the __override values.yaml__ configured for the blueprints as `../values.yaml`.
`({CHART_ROOT_PATH}` is the location of the chart files within the repo. If it's in the root, just use `values.yaml`).

If you have dependencies, add the command `dep up`.

### Editing auto-generated blueprints

Torque wraps a discovered IaC asset in a blueprint when you turn on its **Self-Service** or **Building Block** toggle in **Automation > Automation Inventory > IaC Assets**. The wrapped blueprint's YAML is generated behind the scenes and is not edited in Torque; you customize the asset's **Display Name**, **Icon**, and **Labels** on its **Catalog Design** screen instead. For details, see [Blueprint Design](/blueprint-designer-guide/blueprint-quickstart-guide#option-a-let-torque-wrap-your-assets-for-self-service).

When the generated blueprint is missing details you need - such as the cluster namespace, the execution agent, the Terraform version, or Helm commands to run - create your own blueprint instead:

* Author a blueprint YAML in the `blueprints` folder of your repository that references the asset as a grain and adds the fields described above. Torque adds it to the space when the repository syncs, and keeps a full history in your source control. See [Blueprint Design](/blueprint-designer-guide/blueprint-quickstart-guide#option-b-create-a-multi-asset-blueprint-in-your-source-control-repository).
* Or mark the asset as a **Building Block** and build a blueprint visually in the **Designer Canvas** (**Automation > Automation Inventory > Blueprints > New Blueprint**), where the **Blueprint YAML** tab lets you edit the generated YAML directly. See [Option C](/blueprint-designer-guide/blueprint-quickstart-guide#option-c-build-a-blueprint-visually-in-the-designer-canvas).

Torque validates every blueprint and displays errors next to the blueprint's name. Launch the blueprint from **Self-Service** to make sure it runs as expected.

<!-- REVIEW (2026-10-30): the classic page described editing the auto-generated YAML inside Torque (Copy / Download / Save Changes) with images edit-blueprint.png and blueprint-errors.png. Confirm with Yaniv whether the generated YAML of a wrapped asset can still be viewed or downloaded in next; the images are on the recapture list. -->

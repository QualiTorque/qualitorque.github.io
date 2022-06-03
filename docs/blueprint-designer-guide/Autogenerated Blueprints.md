---
sidebar_position: 2
title: Autogenerated Blueprints
---

## Torque autogenerated blueprints
Torque autogenerates blueprints based on your assets (Terraform modules, Helm Charts). However, you may need to adjust these blueprints to your specific needs.

### Common fields

- **spec_version** should not be changed. 
- **description** may be changed to a better description for your blueprint.
- **inputs**: Torque generates the inputs based on the inputs in your module. The blueprint inputs are presented to the end user when they launch the blueprint, so they can fill out the inputs and/or override any defaults. These inputs will be the module's inputs upon deployment. 
Remove any inputs you don't want to expose in the deployed environment.

### Terraform-specific fields

Torque currently supports only simple types as blueprint inputs for Terraform (string, boolean and numbers). The inputs that have been autogenerated for you are all "simple type" inputs from your module.

- **outputs**: Torque generates the outputs based on the outputs of your module. The blueprint's outputs are presented to the end user when they are ready (in the deployed environment). 
Remove any outputs you don't want to expose when the environment is deployed.
- **tf-version**: The terraform version to be used to deploy the module. Change it according to your needs. 

### Helm autogenerated blueprints

Torque currently supports only simple types as blueprint inputs for Helm (string, boolean and numbers). The inputs that have been autogenerated for you are all "simple type" inputs from your Helm chart. However, you can reference nested values, for example: 

[TBD]  

:::

- **commands**: A list of Helm commands to run before installing the chart.
No need to specify the Helm command itself.
e.g, for the command "helm plugin install [options] <path|url>... [flags] " type "plugin install [options] <path|url>... [flags]".
       
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

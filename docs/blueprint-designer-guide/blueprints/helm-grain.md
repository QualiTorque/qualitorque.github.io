---
sidebar_position: 12
title: The Helm Grain
---

## The HELM Grain
The HELM grain is Torque's native support for HELM v3 charts. Torque allows designers to use HELM specific features to easily orchestrate self-developer and community charts in a standard way and share them with others as building blocks. For a full blueprint yaml example, see [Example 1: Helm Application with MySQL and S3 Deployed by Terraform](/blueprint-designer-guide/blueprint-quickstart-guide#example-1-helm-application-with-mysql-and-s3-deployed-by-terraform).

### Tools and technologies
The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts (pre/post, etc.):

- dotnet
- curl
- tar
- unzip
- kubectl
- kustomize
- helm
- awscli

### source 
Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### agent
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

### inputs
Similar to blueprint inputs and Terraform inputs, the HELM grain inputs allow you to reuse the same HELM chart in different ways using different values overrides. Inputs provided to the HELM grain are used when launching the HELM chart. We recommend using Torque's auto-discovery capability to quickly model your HELM chart within Torque including all defined inputs.

```yaml
grains:
  nginx:
    kind: helm
    spec:
      source:
        path: https://github.com/bitnami/charts.git//bitnami/nginx
      agent:
      ...
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
        - service.image: '{{ .inputs.image }}'
```

:::info
Note that in the above example, blueprint input is used as the value of the HELM grain input, so the environment's owner is able to choose the replicaCount required for his need. The information provided by the user will be passed to HELM chart as values and affect the deployment process.
:::

### outputs
Helm does not natively expose outputs. However, this can be done using a ```post-helm-install``` script that assigns environment variables after the grain's deployment. The script must be referenced, along with the names of the environment variables in the grain's [scripts](#scripts). To expose the outputs to the environment, the names of the environment variables must be referenced in the blueprint's ```outputs``` section.

:::tip __tip__
For illustration purposes, here's a [Helm chart](https://github.com/orel-h/test-spec2-public/blob/master/blueprints/helm-outputs-demo.yaml) that declares a __URL__ environment variable and references the [post-install script](https://github.com/orel-h/test-spec2-public/blob/master/scripts/orel_helm_script_args_demo.sh) that publishes that environment variable as an output.
:::

For example:

```yaml
spec_version: 2
description: 
  ...

inputs:
  ...

outputs:
  output1:
    kind: regular
    value: '{{.grains.<grain name>.scripts.post-helm-install.outputs.<output name>}}'
  output2:
    kind: regular
    value: '{{.grains.<grain name>.scripts.post-helm-install.outputs.<output name>}}'
```

### commands
The commands section allows to execute CLI code prior to the HELM chart deployment to make sure all dependencies are met to ensure a successful deployment. Common use for commands is to execute HELM dependencies update to collect all the sub-charts required for the deployment.

```yaml
grains:
  nginx:
    kind: helm
    spec:
      source:
        path: https://github.com/bitnami/charts.git//bitnami/nginx
      agent:
        name: aws-demo
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
      commands:
        - dep up bitnami/nginx
```

### scripts
Torque provides the ability to execute custom code after Torque executes the Helm chart. This is useful for generating and using outputs, as explained in [helm outputs](#outputs).

For example - grain with a post-install script and outputs "test1" and "test2":

```yaml
grains:
  nginx:
    kind: helm
    spec:
      source:
        path: ...
      agent:
        name: ...
        service-account: ...
      inputs:
        - replicaCount: ...
      commands:
        - dep up bitnami/nginx
      scripts:
        post-helm-install:
          source:  
            path: github.com/steve/my-public.git//scripts/helm_script.sh
          arguments: "{{.inputs.ACCOUNT_ID}},{{.inputs.ID2}},3"
          outputs:
            - test1
            - test2
```

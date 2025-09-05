---
sidebar_position: 10
title: The Helm Grain
---

The Helm grain is Torque's native support for Helm v3 charts. Torque allows designers to use Helm specific features to easily orchestrate self-developer and community charts in a standard way and share them with others as building blocks.

## Tools and technologies

The following tools and technologies are installed out of the box on our agents in the Kubernetes and Helm runners and can be used when writing grain scripts (pre/post, etc.):

- dotnet
- curl
- tar
- unzip
- kubectl
- kustomize
- helm
- awscli

## Usage example

```yaml
spec_version: 2
description: Helm deployment with MLflow platform

inputs:
  target-namespace:
    type: string
  admin-password: 
    type: string
    sensitive: true
  agent:
    type: agent

outputs:
  URL: 
    value: 'http://{{.grains.mlflow.scripts.post-helm-install.outputs.url}}'
    kind: link
    quick: true

grains:
  mlflow:
    kind: helm
    spec:
      source:
        store: ml-repo
        path: helm/mlflow
      target-namespace: '{{ .inputs.target-namespace }}'
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - nameOverride: '{{ envid | downcase }}'
        - tracking.auth.password: '{{ .inputs.admin-password }}'
      scripts:
        post-helm-install:
          source:
            store: ml-repo
            path: scripts/get-url.sh
          arguments: '{{ envid | downcase }} {{ .inputs.target-namespace }}'
          outputs:
            - url
      commands:
        - dep up helm/mlflow
```

## Grain Spec Reference

### `target-namespace`

Torque will install the helm release in the namespace referred to in `target-namespace`.

:::info
- The target namespace must exist in the cluster prior to the deployment
- It must not be equal to the namespaces used by Torque for agent deployments
- Make sure the service account has enough permissions to create/read/delete everything in the helm chart and also create/read/delete secrets and volumes
- To automatically create the namespace if it doesn't exist, see [Creating Namespace Automatically](#use-case-creating-namespace-automatically)
:::

__Example:__

```yaml
helloHelm:
  kind: helm
  spec:
    source:
      store: my-repo
      path: folder/my-app
    target-namespace: '{{ .inputs.namespace }}'
    agent:
      name: '{{.inputs.agent}}'
      service-account: '{{ .inputs.service_account }}'
```

### `source`

The `source` section of a Helm grain provides Torque with the information on where the Helm chart is stored and should be retrieved from. This could be either a direct source URL to a Helm chart, or it can be a reference from a Torque-connected git repository.

Please see [the grain source](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source) for more details.

### `agent`

Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

:::tip
It's also possible to use `parameters` for the service-account name. Note that when service account is not provided in the grain, the default service account provided on the agent will be used.

__Example:__

```yaml
agent:
  name: '{{.inputs.agent}}'
  service-account: '{{ .params.service_account }}'
```
:::

#### Storage Configuration
By default, Helm runners mount storage for code caching optimization. This helps improve performance by caching downloaded charts and dependencies between runs.

Setting `use-storage: false` will run the Helm runner container without storage (stateless mode). This is useful for scenarios where persistent storage is not required.

__Example:__

```yaml
agent:
  name: '{{.inputs.agent}}'
  use-storage: false
```

### `inputs`

Similar to blueprint inputs and Terraform inputs, the Helm grain `inputs` allow you to reuse the same Helm chart in different ways using different values overrides. Inputs provided to the Helm grain are used when launching the Helm chart. We recommend using Torque's auto-discovery capability to quickly model your Helm chart within Torque including all defined inputs.

__Example:__

```yaml
spec_version: 2

inputs:
  replicaCount:
    type: string
    default: '3'
    allowed-values: ['1', '2', '3']
  image:
    type: string
    default: 'nginx:latest'

grains:
  nginx:
    kind: helm
    spec:
      source:
        store: my-repo 
        path: my-asset     
      agent:
        name: my-agent
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
        - service.image: '{{ .inputs.image }}'
```

:::info
Note that in the above example, blueprint input is used as the value of the Helm grain input, so the environment's owner is able to choose the replicaCount required for his need. The information provided by the user will be passed to Helm chart as values and affect the deployment process.
:::

### `values-files`

In Helm, the `values.yaml` file is a critical component that allows you to configure and customize the behavior of your Kubernetes application deployment.

The `values.yaml` file contains the default configuration values for the templates used in the Helm chart. These values can be overridden at the time of deployment or during an upgrade by providing a different set of values.

Torque supports referencing `values.yaml` files as inputs to the Helm grain, with the following syntax:

```yaml
grains:
  nginx:
    kind: helm
    spec:
      source:
        store: my-repo 
        path: my-asset     
      agent: 
        name: my-agent
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
        - service.image: '{{ .inputs.image }}'
      values-files:
        - source:
            store: config-repo
            path: helm/nginx/values.yaml
        - source:
            store: another-repo
            path: overrides/values.yaml
```

### `outputs`

Helm does not natively expose outputs. However, this can be done using a `post-helm-install` script that assigns environment variables after the grain's deployment. The script must be referenced, along with the names of the environment variables in the grain's [`scripts`](#scripts). To expose the outputs to the environment, the names of the environment variables must be referenced in the blueprint's `outputs` section.


__Example:__

```yaml
spec_version: 2
description: Helm blueprint with outputs

inputs:
  agent:
    type: agent

outputs:
  output1:
    kind: regular
    value: '{{.grains.my-helm-grain.scripts.post-helm-install.outputs.url}}'
  output2:
    kind: regular
    value: '{{.grains.my-helm-grain.scripts.post-helm-install.outputs.status}}'
```

### `scripts`

Torque provides the ability to execute custom code after Torque executes the Helm chart. This is useful for generating and using outputs, as explained in [helm outputs](#outputs).

__Example - grain with a post-install script and outputs:__

```yaml
grains:
  nginx:
    kind: helm
    spec:
      source:
        store: my-repo
        path: my-asset
      agent:
        name: my-agent
        service-account: my-service-account
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
      commands:
        - dep up bitnami/nginx
      scripts:
        post-helm-install:
          source:
            store: my-repo 
            path: scripts/get-outputs.sh
          arguments: "{{.inputs.ACCOUNT_ID}},{{.inputs.ID2}},3"
          outputs:
            - test1
            - test2
```

#### Extracting outputs using scripts

This Blueprint is designed to deploy the MLflow platform, an open-source platform for managing the end-to-end machine learning lifecycle, using a Helm chart.

__Example:__

```yaml
spec_version: 2
description: |
  MLflow provides an open-source platform to manage the end-to-end machine learning lifecycle.

inputs:
  target-namespace:
    type: string
  admin-password: 
    type: string
    sensitive: true
  agent:
    type: agent

outputs:
  URL: 
    value: 'http://{{.grains.mlflow.scripts.post-helm-install.outputs.url}}'
    kind: link
    quick: true

grains:
  mlflow:
    kind: helm
    spec:
      source:
        store: ml-repo
        path: helm/mlflow
      target-namespace: '{{ .inputs.target-namespace }}'
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
      - nameOverride: '{{ envid | downcase }}'
      - tracking.auth.password: '{{ .inputs.admin-password }}'
      scripts:
        post-helm-install:
          source:
            store: ml-repo
            path:  scripts/get-url.sh
          arguments: '{{ envid | downcase }} {{ .inputs.target-namespace }}'
          outputs:
            - url
      commands:
      - dep up helm/mlflow
```

**get-url.sh**

```bash
echo "Getting url service address"

export RELEASE_NAME=$1
export NAMESPACE=$2
export url=$(kubectl get service -n $NAMESPACE | grep $RELEASE_NAME | grep LoadBalancer | awk '{print $1}' | xargs kubectl get service -n $NAMESPACE --no-headers | awk '{print $4}')

echo url=$url
```

### `commands`

The `commands` section allows to execute CLI code prior to the Helm chart deployment to make sure all dependencies are met to ensure a successful deployment. Common use for `commands` is to execute Helm dependencies update to collect all the sub-charts required for the deployment.

__Example:__

```yaml
grains:
  nginx:
    kind: helm
    spec:
      source:
        store: my-repo 
        path: my-asset     
      agent:
        name: aws-demo
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
      commands:
        - dep up bitnami/nginx
```


### `command-arguments`

The `command-arguments` field allows you to specify a set of option flags that will be passed to the `helm upgrade` command when deploying the Helm chart. This lets you customize the upgrade command in the same way you would when running it manually.

__Example:__

```yaml
grains:
  nginx-simple:
    kind: helm
    spec:
      source:
        store: helm-charts-repo
        path: helm/nginx
      command-arguments: '--version 1.2.3 --verify --wait'
```

This will run `helm upgrade` with the `--version 1.2.3 --verify --wait` flags appended.

#### Use Case: Creating Namespace Automatically

To create a Kubernetes namespace using Helm if it does not already exist, you can specify the `--create-namespace` flag. This is useful when you want to ensure the target namespace exists before deploying your Helm chart.

__Example:__

```yaml
grains:
  my-app:
    kind: helm
    spec:
      source:
        store: my-charts-repo
        path: applications/my-app
      target-namespace: 'my-new-namespace'
      agent:
        name: '{{ .inputs.agent }}'
      command-arguments: '--create-namespace'
      inputs:
        - replicas: 3
        - environment: production
```

This will run `helm upgrade` with the `--create-namespace` flag, automatically creating the `my-new-namespace` namespace if it doesn't already exist in the cluster.

## Working with Helm Charts Registries

Managing Helm charts through registries allows for centralized storage and version control of Kubernetes application packages. By using registries, teams can efficiently share and deploy consistent application versions across environments. This approach enhances security, simplifies updates, and improves collaboration.

For more detailed information about working with binary repositories, see [Working with Artifactory as Binary Repository](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#working-with-artifactory-as-binary-repository).

### Use-case example

Consider a scenario where your organization needs to deploy applications across multiple environments, each requiring different configurations. By utilizing Helm charts stored in a registry, such as Artifactory or a Git repository, you can streamline the deployment process, ensuring that the correct versions and configurations are applied consistently.

:::info
The following example demonstrates how to configure Helm grains to pull charts from different registries, ensuring flexibility and control over your deployments.

#### Key Configuration Elements:

- **`store`**: Specifies the registry source using the format `artifactory/{{ .inputs.source_name }}` where the source name references a configured Artifactory connection
- **`path`**: Defines the location of the Helm chart within the registry, such as `helm/{{ .inputs.chart_name }}`
- **`resource-type`**: Set to `helm-chart` to indicate this source contains a packaged Helm chart rather than raw files
- **`chart-version`**: (Optional) Specifies the version of the Helm chart to install, such as `3.0.0`
:::

__Example:__

```yaml
spec_version: 2

inputs:
  agent:
    type: agent
  source_name:
    default: 'account-artifactory'
  chart_name:
    default: 'app-0.1.0.tgz'

grains:
  helm-artifactory:
    kind: helm
    spec:
      source:
        store: artifactory/{{ .inputs.source_name }}
        path: helm/{{ .inputs.chart_name }}
        resource-type: helm-chart
      agent:        
        name: '{{.inputs.agent}}'
      inputs:
        - replicaCount: 3
        - nameOverride: {{ .inputs.chart_name }}
 
  helm-bitnami:
    kind: helm
    spec:
      source:
        store: artifactory/public-bitnami # points to credentials
        path: kubernetes-event-exporter
        resource-type: helm-chart
        chart-version: 3.0.0 # optional. chart version to install
      agent:        
        name: '{{ .inputs.agent }}'
      inputs:
        - replicaCount: 2
 
  helm-git:
    kind: helm
    spec:
      source:
        path: https://github.com/my-org/my-helm-repo.git//helm/nginx-test
      agent:
        name: '{{.inputs.agent}}'
      commands:
        - dep up helm/nginx-test
```
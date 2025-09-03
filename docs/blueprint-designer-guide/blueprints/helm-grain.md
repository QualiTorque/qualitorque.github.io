---
sidebar_position: 10
title: The Helm Grain
---

The HELM grain is Torque's native support for HELM v3 charts. Torque allows designers to use HELM specific features to easily orchestrate self-developer and community charts in a standard way and share them with others as building blocks. For a full blueprint yaml example, see [Example 1: Helm Application with MySQL and S3 Deployed by Terraform](/blueprint-designer-guide/blueprint-quickstart-guide#example-multi-grain-blueprint-1-helm-application-with-mysql-and-s3-deployed-by-terraform).

### Deploy in target-namespace
Torque will install the helm release in the namespace referred to in *target-namespace*. The target namespace must exist in the cluster prior to the deployment. It must not be equal to the namespaces used by Torque for agent deployments. Make sure the service account has enough permissions to create/read/delete everything in the helm chart and also create/read/delete secrets and volumes.

In your blueprint YAML, configure the following configuration for Helm grains

```yaml
helloHelm:
  kind: helm
  spec:
    source:
      store: my-repo
      path: folder/my-app
    target-namespace: '{{ .inputs.namespace }}'  # This is the namespace which is passed along to the helm installation.
    agent:
      name: '{{.inputs.agent}}'
      service-account: '{{ .inputs.service_account }}'
```


> It's also possible to use parameters for the service-account name. Note that when service account is not provided in the grain, the default service account provided on the agent will be used.
> ![Catalog cost](/img/helm-auth.png)


### Tools and technologies
The following tools and technologies are installed out of the box on our agents in the Kubernetes and Helm runners and can be used when writing grain scripts (pre/post, etc.):

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
        store: my-repo 
        path: my-asset     
      agent:
      ...
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
        - service.image: '{{ .inputs.image }}'
```

:::info
Note that in the above example, blueprint input is used as the value of the HELM grain input, so the environment's owner is able to choose the replicaCount required for his need. The information provided by the user will be passed to HELM chart as values and affect the deployment process.
:::

### values.yaml as inputs to Helm grain
In Helm, the values.yaml file is a critical component that allows you to configure and customize the behavior of your Kubernetes application deployment.

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
      agent: ...
      inputs:
        - replicaCount: '{{ .inputs.replicaCount }}'
        - service.image: '{{ .inputs.image }}'
      values-files:
      - source:
          store: <> 
          path: <>
      - source:
          store: <>
          path: <>
```

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
        store: my-repo 
        path: my-asset     
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
            store: my-repo 
            path: my-asset     
          arguments: "{{.inputs.ACCOUNT_ID}},{{.inputs.ID2}},3"
          outputs:
            - test1
            - test2
```
**Extracting outputs using scripts**

This Blueprint is designed to deploy the MLflow platform, an open-source platform for managing the end-to-end machine learning lifecycle, using a Helm chart. 

```yaml
spec_version: 2
description: |
  MLflow provides an open-source platform to manage the end-to-end machine learning lifecycle. Key capabilities include experiment tracking, model management, model deployment, generative AI support, model evaluation, and integration with popular libraries. It enables data scientists to streamline ML development, maintain lineage, and operationalize models consistently across environments.

inputs:
  namespace:
    type: string
  admin-password: 
    type: string
    default: 'admin'
    sensitive: true
  agent:
    type: agent
    default: 'ml-agent'

outputs:
  URL: 
    value: 'http://{{.grains.mlflow.scripts.post-helm-install.outputs.url}}'
    kind: link
    quick: true
  credentials:
    value: 'user / {{ .inputs.admin-password }}'
    quick: true

grains:
  mlflow:
    kind: helm
    spec:
      source:
        store: ml-repo
        path: helm/mlflow
      target-namespace: '{{ .inputs.namespace }}'
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
          arguments: '{{ envid | downcase }} {{ .inputs.namespace }}'
          outputs:
            - url
      commands:
      - dep up helm/mlflow
```

**get-url.sh**

```shell
echo "Getting url service address"

export RELEASE_NAME=$1
export NAMESPACE=$2
export url=$(kubectl get service -n $NAMESPACE | grep $RELEASE_NAME | grep LoadBalancer | awk '{print $1}' | xargs kubectl get service -n $NAMESPACE --no-headers | awk '{print $4}')

echo url=$url
```

Let's break down the different sections of the Blueprint:

1. **Inputs**:
   - `namespace`: A string input that specifies the Kubernetes namespace where the MLflow deployment will be created.
   - `admin-password`: A sensitive string input that sets the password for the admin user in the MLflow deployment.The default value is `'admin'`.
   - `agent`: An agent input that specifies the name of the Kubernetes agent to be used for the deployment. The default value is `'ml-agent'`.

2. **Outputs**:
   - `URL`: A link output that provides the URL to access the deployed MLflow instance. It uses the `post-helm-install` script's output (`url`) to generate the URL.
   - `credentials`: A quick output that displays the credentials (user/password) for accessing the MLflow instance.

3. **Grains**:
   - `mlflow`: A Helm grain that defines the specifications for deploying the MLflow Helm chart.
     - `source`: Specifies the location of the Helm chart repository (`ml-repo`) and the path to the MLflow Helm chart (`helm/mlflow`).
     - `target-namespace`: The Kubernetes namespace where the deployment will be created, using the `namespace` input value.
     - `agent`: The name of the Kubernetes agent to be used, using the `agent` input value.
     - `inputs`: A list of input values to be passed to the Helm chart during installation.
       - `nameOverride`: Overrides the name of the Helm release with the environment ID (in lowercase).
       - `tracking.auth.password`: Sets the password for the admin user, using the `admin-password` input value.
     - `scripts`:
       - `post-helm-install`: A script that runs after the Helm chart installation.
         - `source`: Specifies the location of the script (`ml-repo` repository and `scripts/get-url.sh` path).
         - `arguments`: Passes the environment ID (in lowercase) and the namespace as arguments to the script.
         - `outputs`: Captures the `url` output from the script, which is used in the `URL` output.
     - `commands`:
       - `dep up helm/mlflow`: A command that runs the `dep` dependency management tool to update the dependencies for the MLflow Helm chart.

In summary, this Blueprint automates the deployment of the MLflow platform using a Helm chart. It allows you to specify the namespace, admin password, and the Kubernetes agent to be used. After the deployment, it provides the URL and credentials for accessing the MLflow instance. Additionally, it includes a `post-helm-install` script that retrieves the URL for the deployed MLflow instance and outputs it as a link.

### command-arguments

The `command-arguments` field allows you to specify a set of option flags that will be passed to the `helm upgrade` command when deploying the Helm chart. This lets you customize the upgrade command in the same way you would when running it manually.

For example:

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

Here's a complete example showing usage of `command-arguments` along with other Helm grain features:

```yaml
spec_version: 2

description: |
  Example Helm deployment showing:
  - Deploying from Tag  
  - Values files
  - Command arguments
  - Environment variables
  - Scripts 
  - Outputs

inputs:
  agent:
    type: agent
  release: 
    type: string
    default: "v1.0.0"

outputs:
  public_ip:
    value: 'https://{{.grains.nginx-simple.scripts.post-helm-install.outputs.public_ip}}'
  dns:
    value: '{{.grains.nginx-simple.scripts.post-helm-install.outputs.dns}}'
    kind: link

grains:
  nginx-simple:
    kind: helm
    spec:
      agent:
        name: '{{.inputs.agent}}'
      source:
        store: helm-charts-repo
        path: helm/nginx
        tag: '{{ .inputs.release }}'
      target-namespace: '{{ .inputs.namespace }}'  # This is the namespace which is passed along to the helm installation.
      commands:
        - dep up helm/nginx
      values-files:
        - source:
            store: application-config-repo
            path: helm/nginx/values.yaml
            tag: '{{ .inputs.release }}' 
      inputs: # will override values passed from the values.yaml
        - replicaSet: 1
        - applicationName: 'test'
      command-arguments: '--version 3.0.0'
      env-vars:
        - debug: true
      scripts:
        post-helm-install:
          source:
            store: scripts-repo
            path: scripts/post-install-script.sh
          outputs:
            - public_ip
            - dns
```

In this example, the `command-arguments: '--version 3.0.0'` line specifies that when deploying the nginx-simple Helm chart, the `helm upgrade` command should include the `--version 3.0.0` flag.

### Working with Helm Charts Registries

Managing Helm charts through registries allows for centralized storage and version control of Kubernetes application packages. By using registries, teams can efficiently share and deploy consistent application versions across environments. This approach enhances security, simplifies updates, and improves collaboration.

#### Use Case

Consider a scenario where your organization needs to deploy applications across multiple environments, each requiring different configurations. By utilizing Helm charts stored in a registry, such as Artifactory or a Git repository, you can streamline the deployment process, ensuring that the correct versions and configurations are applied consistently.

The following example demonstrates how to configure Helm grains to pull charts from different registries, ensuring flexibility and control over your deployments.

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
        path: helm/{{ .inputs.chart_name }}
        store: artifactory/{{ .inputs.source_name }}
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
        path: kubernetes-event-exporter
        store: artifactory/public-bitnami # points to credentials
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
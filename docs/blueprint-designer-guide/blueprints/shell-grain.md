---
sidebar_position: 21
title: The Shell Grain
---

The Shell grain is an asset-agnostic grain that allows you to run bash/python3 commands as part of your environment’s launch and/or teardown. It’s useful if you need to prepare or clean up your environment’s cloud infrastructure as part of the deployment. For example, you could use this grain to run "datree" validations on a Kubernetes grain’s asset, or perhaps back up/clone a DB before environment deployment.
```yaml”
grains:
  validate:
    kind: shell
    spec:
      agent:
        name: …
      activities:
        deploy:
          commands:
            - …
        destroy:
          commands:
            - …
```
### agent
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

### Tools and technologies
The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts (pre/post, etc.):

- dotnet
- python3
- pip3

### inputs
Similar to blueprint inputs, inputs provided to the Shell grain are used when launching the shell. Unlike other grains, in the Shell grain, inputs are used inside the __commands__ section, wrapped in double curly brackets - ```" {{ .inputs.input1 }}"```.

```yaml
grains:
  validate:
    kind: shell
    spec:
      agent:
        name: kubernetes-testing1
      activities:
        deploy:
          commands:
            - "{{ .inputs.repoURL }}"
            - "git clone {{ .inputs.repoUrl }}"
```

### Outputs
The Shell grain output can be captured during the shell execution and than be used as a blueprint output or as input for another grain. Note that the Shell grain output is the entire stdout of the grain execution.

```yaml”
outputs:
  deploy-output:
    value: '{{.grains.grain1.activities.deploy.commands.bash.output}}'

grains:
  grain1:
    kind: shell
    spec:
      files:
      - path: "dependencies/script.sh"
        source: shell-example
      agent:
      # The Torque agent that will be used to provision the environment.
        name: '{{ .inputs.agent }}'
      activities:
        deploy:
          commands:
            - name: bash
              command: "./script.sh"
```

### commands
The commands section allows to execute bash/python3 code or files stored in one of the space's repositories as part of the launch and/or end of the environment. The Shell grain has two command types - __deploy__ for running code at the launch of the environment, and __destroy__ for running code as part of the environment’s teardown. 

```yaml”
grains:
  validate:
    kind: shell
    spec:
      agent:
        name: kubernetes-testing1
      activities:
        deploy:
          commands:
            - "apt-get -y install git unzip curl"
            - "git clone {{ .inputs.repoUrl }}"
            - "curl https://get.datree.io | /bin/bash"
            - "datree test {{.inputs.repoName}}/{{.inputs.filePath}}"
        destroy:
          commands:
            - "https://gist.githubusercontent.com/.../check.py"
            - "python3 check.py"
```

:::tip __note__
You can specify the code to be run as freetext bash/python3 commands or by referencing a file (any file type can be run, not just bash or python3). 

To run a file, specify the file and its repo in the ```files``` section and the file name and extension under ```commands```. For example, file "post-install-script.sh":

```jsx title=
grains:
  validate:
    kind: shell
    spec:
      agent:
        name: ...
      files:
        - path: "scripts/post-install-script.sh"
          source: my-repo
      activities:
        deploy:
          commands:
            - "apt-get -y install git unzip curl"
            - "git clone {{ .inputs.repoUrl }}"
            - "curl https://get.datree.io | /bin/bash"
            - "./post-install-script.sh"
            - name: generate_report
              command: "datree test {{.inputs.repoName}}/{{.inputs.filePath}}"
```

```jsx title="Python 3 example:"
commands
  - "apt-get -y install wget"
  - "wget https://.../check.py"
  - "python3 check.py"
```

```jsx title="Bash example:"
commands
  - "apt-get -y install wget"
  - "wget https://.../simple.sh"
  - "/bin/bash simple.sh"
```
:::
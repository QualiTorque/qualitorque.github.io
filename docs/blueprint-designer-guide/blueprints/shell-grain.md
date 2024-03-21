---
sidebar_position: 21
title: The Shell Grain
---

The Shell grain is an asset-agnostic grain that allows you to run bash/python3 commands as part of your environment’s launch and/or teardown. It’s useful if you need to prepare or clean up your environment’s cloud infrastructure as part of the deployment. For example, you could use this grain to run "datree" validations on a Kubernetes grain’s asset, or perhaps back up/clone a DB before environment deployment.
```jsx
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
### Agent
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

### Tools and Technologies
The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts (pre/post, etc.):

- dotnet
- python3
- pip
- curl
- wget
- jq
- git
- zip
- unzip
- kubectl
- awscli

### Inputs
Similar to blueprint inputs, inputs provided to the Shell grain are used when launching the shell. Unlike other grains, in the Shell grain, inputs are used inside the __commands__ section, wrapped in double curly brackets - ```" {{ .inputs.input1 }}"```.

```jsx
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
```

### Outputs
The Shell grain output can be captured during the shell execution and than be used as a blueprint output or as input for another grain. Note that the Shell grain output is the entire stdout of the grain execution.

```jsx
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

### Commands
The commands section allows to execute bash/python3 code or files stored in one of the space's repositories as part of the launch and/or end of the environment. The Shell grain has two command types - __deploy__ for running code at the launch of the environment, and __destroy__ for running code as part of the environment’s teardown. 

```jsx
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

> :warning: **Warning**
> Each command new line from the above example is segregated in its own shell, so running these commands:
> ```jsx
>       activities:
>        deploy:
>          commands:
>            - "cd /home"
>            - "cat file.txt"
>```
> Would **not** work as expected. The correct syntax would be:
> ```jsx
>       activities:
>        deploy:
>          commands:
>            - "cd /home; cat file.txt"
>```
> Another option would be to have a script file and call it directly only on one line. 
>
> **Note**: only the **last command or script** provided is evaluated for a successful exit code, all previous commands or scripts will still be ran regardless of failures.

:::tip __note__
You can specify the code to be run as free text bash/python3 commands or by referencing a file (any file type can be run, not just bash or python3). 

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

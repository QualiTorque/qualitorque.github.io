---
sidebar_position: 21
title: The Shell Grain
---

The Shell grain is an asset-agnostic grain that allows you to run bash/python3 commands as part of your environment’s launch and/or teardown. It’s useful if you need to prepare or clean up your environment’s cloud infrastructure as part of the deployment. For example, you could use this grain to run "datree" validations on a Kubernetes grain’s asset, or perhaps back up/clone a DB before environment deployment.

**Complete example**

```yaml
spec_version: 2
description: Run a simple shell grain with inputs and outputs

inputs:
  script_input1:
    type: string
    default: 'input1'
  agent:
    type: agent

outputs:
  output_script_1:
    value: '{{ .grains.run_shell_grain.activities.deploy.commands.my_script.outputs.output_script_1 }}'
  output_script_2:
    value: '{{ .grains.run_shell_grain.activities.deploy.commands.my_script.outputs.output_script_2 }}'  

grains:
  run_shell_grain:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      files:
        - source: my_scripts_repo
          path: scripts/script.sh
      activities:
        deploy:
          commands:
            - name: my_script
              command:  'source script.sh {{ .inputs.script_input1 }}'
              outputs:
                - output_script_1
                - output_script_2
```

**script.sh**

```bash
input_1=$1
echo "input_1=$input_1"

# run some cmds..
cmd1_output=$(jq --arg ResourceId "..." '.resources[] | .attributes | .instance_state' $input_1)
cmd2_output=$(jq --arg ResourceId "..." '.resources[] | .attributes | .instance_state' $input_1)

# capture the outputs 
export output_script_1=$cmd1_output
export output_script_2=$cmd2_output
```


### agent
Please see [the grain agent](/bluemy_script-designer-guide/bluemy_scripts/bluemy_scripts-yaml-structure#agent) for more details.

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

### inputs

Similar to bluemy_script inputs, inputs provided to the Shell grain are used when launching the shell. Unlike other grains, in the Shell grain, inputs are used inside the __commands__ section, wrapped in double curly brackets - ```" {{ .inputs.input1 }}"```.

```yaml
grains:
  validate:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      activities:
        deploy:
          commands:
            - "apt-get -y install git unzip curl"
            - "git clone {{ .inputs.repoUrl }}"
```

### outputs

The shell grain output can be captured during the shell execution by exporting named env_var and than be used as the blueprint output or as input for another grain. 

```yaml
outputs:
  output_script:
    value: '{{ .grains.run_shell_grain.activities.deploy.commands.my_script.outputs.output_script }}'

grains:
  run_shell_grain:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      files:
        - source: my_scripts_repo
          path: scripts/script.sh
      activities:
        deploy:
          commands:
            - name: my_script
              command:  'source script.sh'
              outputs:
                - output_script
```

**script.sh**

```bash
# run some cmds..
cmd_output=$(...)

# capture the outputs 
export output_script=$cmd_output
```

### commands
The commands section allows to execute bash/python3 code or files stored in one of the space's repositories as part of the launch and/or end of the environment. The Shell grain has two command types - __deploy__ for running code at the launch of the environment, and __destroy__ for running code as part of the environment’s teardown. 

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
> 
> ```yaml
>      activities:
>        deploy:
>          commands:
>            - "cd /home"
>            - "cat file.txt"
> ```

> Is not as running it like:
> 
> ```yaml
>      activities:
>        deploy:
>          commands:
>            - "cd /home; cat file.txt"
> ```
> 
> Another option would be to have a script file and call it directly only on one line. 
>

:::tip__note__
**Note**: only the **last command or script** provided is evaluated for a successful exit code, all previous commands or scripts will still be ran regardless of failures.
:::

:::tip __note__
You can specify the code to be run as free text bash/python3 commands or by referencing a file (any file type can be run, not just bash or python3). 

To run a file, specify the file and its repo in the ```files``` section and the file name and extension under ```commands```. For example, file "post-install-script.sh":

```yaml title=
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

```yaml title="Python 3 example:"
commands
  - "apt-get -y install wget"
  - "wget https://.../check.py"
  - "python3 check.py"
```

```yaml title="Bash example:"
commands
  - "apt-get -y install wget"
  - "wget https://.../simple.sh"
  - "/bin/bash simple.sh"
```
:::

---
bar_position: 12
title: The Shell Grain
---

The Shell grain is an asset-agnostic grain that allows you to run bash/python3 commands as part of your environment's launch and/or teardown.The commands section allows to execute bash/python3 code or files stored in one of the space's repositories as part of the launch and/or end of the environment. The Shell grain has two command types - `deploy` for running code at the launch of the environment, and `destroy` for running code as part of the environment's teardown.It's useful if you need to prepare or clean up your environment's cloud infrastructure as part of the deployment. For example, you could use this grain to run "datree" validations on a Kubernetes grain's asset, or perhaps back up/clone a DB before environment deployment.

## Tools and Technologies

The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts:

* dotnet
* python3
* pip
* curl
* wget
* jq
* git
* zip
* unzip
* kubectl
* awscli


The Shell grain is an asset-agnostic grain that allows you to run bash/python3 commands as part of your environment’s launch and/or teardown. It’s useful if you need to prepare or clean up your environment’s cloud infrastructure as part of the deployment. For example, you could use this grain to run "datree" validations on a Kubernetes grain’s asset, or perhaps back up/clone a DB before environment deployment.

## Usage Examples

### Simple

```yaml
spec_version: 2
description: Run a simple shell grain

grains:
  validate:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      activities:
        deploy:
          commands:
            - 'echo "Hello World"'
```

### Inputs and outputs

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

**Script example:**

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

## Grain Spec Reference

### `agent`

Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#agent) for more details.

### `inputs`

Inputs provided to the shell grain are used when launching the shell commands. 

:::info
Unlike other grains, in the shell grain, inputs are used inside the `commands` section, wrapped in double curly brackets - `"{{ .inputs.repoUrl }}"`.
:::

```yaml
spec_version: 2
description: Clone a git repo using shell grain

inputs:
  repoUrl:
    type: string
    default: "https://github.com/my-org/my-repo.git"

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

### `outputs`

The shell grain output can be captured during the shell execution by exporting named environment variables and then be used as the blueprint output or as input for another grain. 

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
          branch: my-branch # optional
          commit: d39c5737f2fa999c20f12d09c5b46a4f67f47b98 # optional
      activities:
        deploy:
          commands:
            - name: my_script
              command:  'source script.sh'
              outputs:
                - output_script
```

**Script example:**

```bash
# run some cmds..
cmd_output=$(...)

# capture the outputs 
export output_script=$cmd_output
```

**Advanced Example: File-based Output Extraction**

This example demonstrates a standardized approach for capturing outputs from external scripts (similar to Terraform's approach). The Python script writes outputs to a file, which is then parsed and exported as environment variables.

```yaml
spec_version: 2
description: Extract outputs from a Python script using file-based approach

inputs:
  selection:
    type: string
    default: 'production'

outputs:
  database_endpoint:
    value: '{{ .grains.shell_processor.activities.deploy.commands.extract_outputs.outputs.database_endpoint }}'
  api_key:
    value: '{{ .grains.shell_processor.activities.deploy.commands.extract_outputs.outputs.api_key }}'
  cluster_id:
    value: '{{ .grains.shell_processor.activities.deploy.commands.extract_outputs.outputs.cluster_id }}'

grains:
  shell_processor:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      files:
        - source: assets
          path: scripts/generate_outputs.py
      activities:
        deploy:
          commands:
            - name: generate_outputs_file
              command: 'python3 generate_outputs.py {{ .inputs.selection }}'
            - name: extract_outputs
              command: |
                while IFS='=' read -r key value; do
                  if [[ -n "$key" && -n "$value" ]]; then
                    export $key=$value
                    echo "Exported $key=$value"
                  fi
                done < ~/outputs.txt
              outputs:
                - database_endpoint
                - api_key
                - cluster_id
```

**Python script example (generate_outputs.py):**

```python
import sys
import os

def generate_outputs(environment):
    # Simulate some processing based on input
    outputs = {
        'database_endpoint': f'db-{environment}.example.com:5432',
        'api_key': f'api-key-{environment}-12345',
        'cluster_id': f'cluster-{environment}-xyz789'
    }
    
    # Write outputs to a file in key=value format
    output_file = os.path.expanduser('~/outputs.txt')
    with open(output_file, 'w') as f:
        for key, value in outputs.items():
            f.write(f'{key}={value}\n')
    
    print(f"Generated outputs for environment: {environment}")

if __name__ == "__main__":
    environment = sys.argv[1] if len(sys.argv) > 1 else 'default'
    generate_outputs(environment)
```

:::info
This file-based approach provides a standardized way to extract outputs from any script language (Python, Node.js, Go, etc.) by having the script write outputs in `key=value` format to a file, which is then parsed and exported as shell environment variables.
:::

**Output file format (~/outputs.txt):**
```
database_endpoint=db-production.example.com:5432
api_key=api-key-production-12345
cluster_id=cluster-production-xyz789
```

### `activities`

The `activities` section defines the lifecycle hooks for the shell grain. It contains the actual commands to be executed during different phases of the environment lifecycle.

#### `deploy`

The `deploy` activity contains commands that are executed during the environment launch phase. This is where you place initialization scripts, setup commands, or any operations needed to prepare your environment.

```yaml
grains:
  my_shell_grain:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      activities:
        deploy:
          commands:
            - "apt-get -y install git curl"
            - "git clone {{ .inputs.repoUrl }}"
            - "curl https://get.datree.io | /bin/bash"
            - name: validation_script
              command: "datree test {{.inputs.repoName}}/{{.inputs.filePath}}"
              outputs:
                - validation_result
```

#### `destroy`

The `destroy` activity contains commands that are executed during the environment teardown phase. This is where you place cleanup scripts, backup operations, or any operations needed to properly clean up your environment.

```yaml
grains:
  my_shell_grain:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      activities:
        deploy:
          commands:
            - "echo 'Environment setup complete'"
        destroy:
          commands:
            - "echo 'Starting cleanup process'"
            - name: backup_logs
              command: "tar -czf logs-backup.tar.gz /var/log/app"
            - "rm -rf /tmp/temp-files"
            - "echo 'Cleanup complete'"
```

:::info
The `deploy` activity is mandatory for all shell grains, even if you only want to run commands during the `destroy` phase. In such cases, you can add a simple placeholder command like `echo "NOTHING-TO-DO"` in the deploy section.
:::

### `files`

The `files` section allows you to reference external script files stored in your space's repositories. These files can then be executed as part of your shell grain commands. This is useful for organizing complex scripts separately from your blueprint YAML.

```yaml
grains:
  my_shell_grain:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      files:
        - source: my_scripts_repo
          path: scripts/setup.sh
        - source: my_scripts_repo
          path: scripts/validation.py
          branch: develop # optional - specify a specific branch
          commit: d39c5737f2fa999c20f12d09c5b46a4f67f47b98 # optional - specify a specific commit
      activities:
        deploy:
          commands:
            - "chmod +x setup.sh"
            - "./setup.sh"
            - "python3 validation.py"
```

#### File Properties

- **`source`** (required): The name of the repository in your space that contains the file
- **`path`** (required): The relative path to the file within the repository
- **`branch`** (optional): Specific branch to use. If not specified, uses the default branch
- **`commit`** (optional): Specific commit hash to use. Takes precedence over branch if both are specified

:::info
Files referenced in the `files` section are downloaded to the working directory of the shell grain and can be executed directly by name in the `commands` section.
:::

### `commands`
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

:::warning
Each command new line from the above example is segregated in its own shell, so running these commands:

```yaml
activities:
  deploy:
    commands:
      - "cd /home"
      - "cat file.txt"
```

Is not as running it like:

```yaml
activities:
  deploy:
    commands:
      - "cd /home; cat file.txt"
```

Another option would be to have a script file and call it directly only on one line.
:::

:::info
Only the **last command or script** provided is evaluated for a successful exit code, all previous commands or scripts will still be ran regardless of failures.
:::

:::info
You can specify the code to be run as free text bash/python3 commands or by referencing a file (any file type can be run, not just bash or python3).

To run a file, specify the file and its repo in the `files` section and the file name and extension under `commands`. For example, file "post-install-script.sh":

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

**Python example:**

```yaml
commands:
  - "apt-get -y install wget"
  - "wget https://.../check.py"
  - "python3 check.py"
```

**Bash example:**

```yaml
commands:
  - "apt-get -y install wget"
  - "wget https://.../simple.sh"
  - "/bin/bash simple.sh"
```
:::


**Using destroy command example:**

```yaml
spec_version: 2
description: Cleanup task example

inputs:
  agent:
    type: agent

grains:
  create_task:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      files:
        - source: blueprints
          path: blueprints/workflows/scripts/create-something.sh
      activities:
        deploy:
          commands:
            - name: create-task
              command:  'source create-something.sh'

  cleanup_task:
    kind: shell
    spec:
      agent:
        name: '{{ .inputs.agent }}'
      files:
        - source: blueprints
          path: blueprints/workflows/scripts/clean-something.sh
      activities:
        # required to have a deploy section, even if it does nothing
        deploy:
          commands:
            - "echo NOTHING-TO-DO"
        destroy:
          commands:
            - name: cleanup-task
              command:  'source clean-something.sh'
```
#### Using Multiline Shell Commands in YAML

When using multiline shell commands in YAML, you can use the `>-` syntax to indicate that the content is a folded block scalar. Each line should end with a semicolon (`;`), double ampersand (`&&`), or double vertical bar (`||`) to ensure the commands are executed correctly. For example:

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
            - >- # you can use this syntax in the commands sections
              apt-get -y install git unzip curl &&
              git clone {{ .inputs.repoUrl }} &&
              curl https://get.datree.io | /bin/bash &&
              datree test {{.inputs.repoName}}/{{.inputs.filePath}}
        destroy:
          commands:
            - name: my_script
              command: >- # or like so in the command section
                curl https://get.datree.io | /bin/bash ;
                source script.sh {{ .inputs.script_input1 }}
```

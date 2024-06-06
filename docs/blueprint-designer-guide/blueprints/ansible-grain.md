---
sidebar_position: 24
title: The Ansible Grain
---

The Ansible grain is Torque’s native support for orchestrating the execution of Ansible playbooks as part of a Torque blueprint. The referenced playbook can rely on vars or inventory-hosts that are dynamically provided by Torque, and then utilize them to perform configuration management, updates, a health check or any other flow that is executable from Ansible. 

### Tools and technologies

The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when designing ansible playbook execution:

* dotnet
* git
* python3
* pip3
* ansible
* openssh-client

### discovery

Auto-discovery of Ansible playbooks requires parsing the file content to differentiate playbooks from other YAML files. The validation process checks if a `yaml` file contains the `tasks` property, which is a key indicator of an Ansible playbook.

The process is optimized to ensure efficient and targeted scanning.

The structure of a playbook directory should be as follows:

```yaml
base_folder/
  vars/ # any directory name
    variables_file # any filename without extension
  playbook.yaml
```

A variables file might have the following structure:

```yaml
variable1: test
variable2:
  - value1
  - value2
  - value3
variable3:
  test: "value1"
  test2: "value2"
  test3: '{{ name }}'
```

Here's an example of an auto-generated blueprint based on the discovered playbook and variables file:

```yaml
spec_version: 2
description: Auto-generated Ansible Blueprint
inputs:
  agent:
    type: agent
  variable1:
    type: string
    default: test
  variable2:
    type: list
    default: 
      - value1
      - value2
      - value3
  variable3:
    type: dict
    default:
      test: "value1"
      test2: "value2"
      test3: '{{ name }}'

grains:
  ansible_playbook:
    kind: ansible
    spec:
      source:
        store: ansible-repo
        path: ansible/playbook.yml
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - variable1: '{{ .inputs.variable1 }}'
        - variable2: '{{ .inputs.variable2 }}'
        - variable3: '{{ .inputs.variable3 }}'
      # The outputs section should be reviewed and corrected based on the playbook content
      outputs:
        - result
```

:::tip__Note__
Please note that the `outputs` section in the auto-generated blueprint is a placeholder and should be reviewed and corrected by the user based on the actual outputs of the playbook. Since determining the outputs requires analyzing the playbook content, there is no automated way to set them during the auto-discovery process.
:::

:::tip__Note__
The blueprint YAML should be validated and adjusted by the user before attempting to run it, particularly for the `outputs` section, to ensure accurate and expected behavior.
:::

### source
The source section of an Ansible grain provides Torque with the information on where the Ansible playbook is stored and should be retrieved from. This could be either a direct source URL to an Ansible playbook YAML file, or it can be a reference from a Torque-connected git repository. 

__Example - direct:__

```yaml 
My_Ansible_Grain:
  kind: ansible
  spec:
    source:
      path: https://github.com/quali/demo/blob/main/assets/ansible/install_apache2_ubuntu.yaml
```

__Example - repository:__

```yaml 
My_Ansible_Grain:
  kind: ansible
  spec:
    source:
      store: assets
      path: assets/ansible/install_apache2_webgame_ubuntu.yaml
```

### agent
Please see [the grain agent](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#host) for more details.

### inputs
Inputs which are provided to the ansible grain will be used in the ansible command line as "extra-vars".
The syntax is similar to any grain inputs.

Let's look at an example. In the example we have a blueprint with 2 grains: a VM and an ansible playbook to configure it.

**Blueprint:**

```yaml
spec_version: 2
   ...   
grains:
  my_vm:
    kind: terraform
    spec:
      source:
        store: assets
        path: terraform/vcenter/linux_vm
      outputs:
      - vm_ip
      - vm_link
      - vm_name

  configure-vm:
    depends-on: my_vm
    kind: ansible
    spec:
      source:
        store: assets
        path: assets/ansible/configure.yaml
      inputs:
        - nodes: '{{ grains.my_vm.outputs.vm_ip }}'
        - username: '{{ .params.vc_ubuntu_user }}'
        - password: '{{ .params.vc_ubuntu_password }}'
```

:::info
Torque supports playbooks which use ansible roles.
:::

**Playbook:**

```yaml
- hosts: {{ nodes }}
  tasks:
  - name: configure virtual machine
    azure_rm_virtualmachine:
      username: "{{ username }}"
      password: "{{ password }}"
      …          
```

Torque will create a JSON file containing the grain inputs under the path: /var/run/ansible/inputs/inputs.json.

```json
{
  "nodes": [...],
  "username": ...,
  "password": ...
}
```

The playbook will be executed with the extra vars in the following way:
```
ansible-playbook myplaybook.yaml --extra-vars "@/var/run/ansible/inputs/inputs.json"
```

### inventory-file

Inventory file is a special grain section unique to the ansible grain, that allows you to provide in a YAML structured format, the content of the Ansible inventory file that will be generated for the Ansible playbook to use. For a deep understanding of the format of this file, please see the Ansible official documentation at https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups.
The general standard structure for such a file is as follows:

```yaml 
host_group:
  hosts:
    host1:
      host1_var: host1_var_value
    host2:
      host2_var: host1_var_value
  vars:
    group_var: group_var_value
```

Depending on the Ansible packages used in the playbook, these host and group variables may be used automatically by the package step (in which case, they must be provided in a specific name, for example an “ansible_become: yes/no” group var will determine if the actions in the playbook need to be run as a different user from the host connection info.). 
Variables not defined on a host will automatically default to the values set in the vars section of the host_group. For example, the below playbook:

```yaml 
---
- gather_facts: no
  hosts: all
  tasks:
  - name: Print Hello World
    debug: 
      msg: "Hello World, my name is {{ person_name}}"
```

with the below inventory file:
```yaml 
      inventory-file:
        all:
          hosts:
            host1:
              person_name: John
            host2:          
          vars:
            person_name: Doe
```

will result in this output

```yaml 
TASK [Print Hello World] *******************************************************
ok: [host1] => {
    "msg": "Hello World, my name is John"
}
ok: [host2] => {
    "msg": "Hello World, my name is Doe"
}
```

Any section of the “inventory-file:” can contain dynamic values from dependent grains, from the blueprint’s inputs or from Torque’s parameter storage. For more information, see  [Torque Templating engine](/blueprint-designer-guide/blueprints/blueprints-yaml-structure#torque-templating-engine).
__Example:__ Below is an example of a grains section of a blueprint, containing an Ansible grain:

```yaml
 grains:
  hello_world_ansible:
    kind: ansible
    spec:
      source:
        store: assets
        path: ansible/hello_world.yaml
      agent:
        name: my-torque-agent
      inventory-file:
        all:
          hosts:
            host1:
              person_name: John
            host2:          
          vars:
            person_name: Doe
```

### outputs

Ansible does not support outputs from playbooks natively so Torque adds this support on top of the ansible capabilities.
Why would you need outputs from your ansible grain?
Output from the ansible grain can be passed to another grain (ansible or not) or to become one of the blueprint outputs so can be provided to the blueprint consumer (the end user).

For this purpose, we have developed the Torque ansible module "export-torque-outputs".

The module accepts a dictionary of output names and values. 

Usage example:

**Playbook:**
```yaml
tasks:
  - name: task1
      configure_vm:
      …
      register: result1
    …
  - name: task2
      do_something_else:
      …
      register: result2
    

 - name: Export outputs
    torque.collections.export_torque_outputs:
      outputs:
        output1: “{{ result1 }}”
        output2: “{{ result2 }}”
```

:::info
The task which runs the "export_torque_outputs" module must be run on localhost. 
:::

**Blueprint:**

```yaml
grains:
   configure-vm:
      kind: ansible
      spec:
       ...
       outputs:
          - output1
          - output2  
```

If you wish to install the module locally to test it, please run ```ansible-galaxy collection install torque.collections```
The module resides in the marketplace : https://galaxy.ansible.com/torque/collections

### Installing Ansible Requirements

Torque is designed to streamline the installation of your module’s dependencies. It accomplishes this by automatically detecting and installing the requirements specified in a ``requirements.yaml`` or ``requirements.yml`` file. This file should be located in the root directory of your module.

For instance, if your module’s main file is located at ``ansible/my-module/main.yaml``, the corresponding requirements file should be placed in the same directory, i.e., ``ansible/my-module/``.

By adhering to this structure, you can ensure that Torque correctly identifies and installs all necessary requirements for your module.

### command-arguments

The `command-arguments` field allows you to pass additional arguments to the `ansible-playbook` command when executing the Ansible playbook. This gives you flexibility to customize the Ansible run as needed.

For example:

```yaml
grains:
  print_hello:
    kind: ansible
    spec:
      source:
        store: ansible-repo
        path: ansible/playbook.yaml
      agent:
        name: '{{ .inputs.agent }}'
      command-arguments: "--skip-tags deploy --force-handlers"
```

This will run `ansible-playbook` with the `--skip-tags deploy --force-handlers` flags appended to the command.

Here's a more complete example showing usage of `command-arguments` along with other Ansible grain configurations:

```yaml
spec_version: 2
description: Run an Ansible playbook with a local connection

inputs:
  agent:
    type: agent

grains:
  print_hello:
    kind: ansible
    spec:
      source:
        store: ansible-repo
        path: ansible/playbook.yaml
      agent:
        name: '{{ .inputs.agent }}'
      command-arguments: "--skip-tags deploy --version" 
      env-vars: []
      inventory-file:
        localhost:
          hosts:
            127.0.0.1:
              ansible_connection: local
```
For the Blueprint example above, the directory structure is:

```
playbook.yaml
roles/
    hello/
        tasks/
            main.yaml
```

`playbook.yaml`:

```yaml
---
- hosts: localhost
  roles:
    - hello
```

`roles/hello/tasks/main.yaml`:

```yaml
---
- name: Print hello
  debug:
    msg: "hello"
```

This will execute the `hello` role, which will print "hello" to the console.

Note that this is a very simple example, and roles can be much more complex, containing multiple tasks, handlers, variables, and other components. Additionally, roles can be shared across multiple playbooks or even distributed as reusable Ansible roles.

In this blueprint, when executing the `print_hello` Ansible grain, the `ansible-playbook` command will include the `--skip-tags deploy --version` flags specified in the `command-arguments` field.

The `command-arguments` value can include any valid arguments that could be passed to `ansible-playbook`. This allows customizing things like tags to run/skip, handling behavior, displaying version info, and more.


### pre-ansible-run scripts

Torque allows you to run scripts before executing the Ansible playbook. This can be useful for various purposes, such as setting up the environment or performing prerequisite tasks.

To run a script before the Ansible playbook execution, you can define it under the `scripts` section of the Ansible grain. The `pre-ansible-run` key is used to specify the script to be executed.

#### Use Case: Creating a Vault Password File

One common use case is to create a file containing the Ansible Vault password. This password is required when working with encrypted data in Ansible playbooks. Here's an example of how you can pass a token from the parameter store as the Vault password:

```yaml
spec_version: 2
description: Ansible playbook example with pre-ansible-run scripts
inputs: ...
grains:
  ansible_playbook:
    kind: ansible
    spec:
      source:
        store: ansible-repo
        path: ansible/playbook.yml
      agent: ...
      command-arguments: "--vault-password-file ~/.vault_pass.txt"
      scripts:
        pre-ansible-run:
          source:
            store: my-script-repo
            path: scripts/create_vault_file.sh
          arguments: '{{ .params.vault_pass }}'
```

In this example, the `pre-ansible-run` script is defined under the `scripts` section. The `source` field specifies the location of the script (in this case, a Git repository named `my-script-repo`), and the `path` field specifies the relative path to the script within the repository.

The `arguments` field allows you to pass arguments to the script. In this case, the value of `{{ .params.vault_pass }}` is used, which retrieves the Vault password from the parameter store.

The script `create_vault_file.sh` should create a file named `.vault_pass.txt` in the current working directory and write the Vault password to it. Ansible will then use this file to decrypt the encrypted data in the playbook, as specified by the `--vault-password-file` argument in the `command-arguments` field.

#### Script Execution Environment

The pre-Ansible run scripts are executed within the same environment as the Ansible playbook itself. This means that any environment variables or files created by the script will be accessible to the Ansible playbook.

#### Additional Notes

- The scripts are executed in the order they are defined.
- If a script fails (non-zero exit code), the Ansible playbook execution will be aborted.
- Make sure to include any required dependencies or libraries for the scripts within the script repository or the Ansible repository.

By using pre-Ansible run scripts, you can enhance the flexibility and functionality of your Ansible playbooks within the Torque ecosystem.
---
sidebar_position: 6
title: Docker Agent
---

## How to install a Torque Agent on a VM
The Torque agent can be hosted in various ways, one of them on a VM/EC2 with a docker host installed.
 
### Requirements
* VM (this guide will walk you through how to configure the agent on ubuntu, but you can use any distribution as long as it supports docker)
* `docker`
* `docker-compose`
* `wget`
* `unzip`
 
### What if my VM is barebone?
Great question!
Follow these steps to get your VM all set up.

1. Install `docker`
   ```bash
   # Add Docker's official GPG key:
   sudo apt-get update
   sudo apt-get install ca-certificates curl
   sudo install -m 0755 -d /etc/apt/keyrings
   sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyringsdocker.asc
   sudo chmod a+r /etc/apt/keyrings/docker.asc
   
   # Add the repository to Apt sources:
   echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
     $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
     sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   sudo apt-get update
   
   # install docker and docker compose
   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugindocker-compose-plugin
   ```

2. Create an executable to use docker compose as `docker-compose`
    ```bash
    cat << 'EOF' | sudo tee /usr/local/bin/docker-compose
    #!/bin/bash
    docker compose "$@"
    EOF
    
    # make it executable
    sudo chmod +x /usr/local/bin/docker-compose
    ```

3. Install `wget` and `unzip`
    ```bash
    sudo apt-get install wget unzip
    ```
 
### Install the Torque agent
To install the agent, log in to Torque as a system administrator.
1. Navigate to **Resources → Agents**.
2. Click **New Agent** in the top-right corner to open the **Connect an Agent** wizard.
3. In the **Setup** step, choose **Cloud**, then **Public Cloud**, then select the **Docker** tile, and click **Next**.
4. In the **Generate Agent** step, enter a name for the agent and click **Next**.
5. On the **Installation Instructions** step, click **Download Zip** to download the installation package.
6. Copy the downloaded `deployment.zip` to your VM (for example with `scp`), then run:
    ```bash
    unzip deployment.zip
    cd deployment
    chmod +x deploy_torque_agent.sh
    ./deploy_torque_agent.sh
    ```
7. Fill in the agent name and press `Enter`.
8. This will initiate the installation process. After roughly a minute you'll be able to see the **Connection Status** change to **Connected** back in Torque.
9. Click **Associate to Space**, choose the desired spaces and you're done!

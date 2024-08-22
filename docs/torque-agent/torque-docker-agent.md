---
sidebar_position: 6
title: Torque Docker Agent
---

## How to install Torque Agent on a VM
Torque agent can be hosted in various ways, one of them on a VM/EC2 with a docker host installed.
 
### Requirements
* VM (this guide will walk you through how to configure torque agent on ubuntu, but you can use any environment as long as it supports docker)
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
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
 
# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
 
# install docker and docker compose
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
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
 
### Install Torque agent
To install the agent, log in with as a system administrator
1. Go-to https://portal.qtorque.io/admin/agents
2. Click on `New Agent`, select the `vCenter` logo, then choose `Docker`. Choose a name for the agent and click on `Next`.
3. Click on `Generate`
4. Right click on it and select `Copy Link`
5. SSH into your VM and execute the following
```bash
wget <paste-the-copied-link> # for example wget https://portal.qtorque.io/api/settings/executionhosts/deployment/cYrzsDVgYSam/deployment.zip
unzip deployment.zip
sudo chmod +x deployment/deploy_agent.sh
sudo chmod +x deployment/deploy_torque_agent.sh
```
6. Install the agent by cd into `deployment` folder and execute `./deploy_torque_agent.sh`
7. Fill the agent name and press `Enter`
8. This will initiate the installation process. After roughly a minute you'll be able to see in Torque's portal the 'Connection Status' changes to 'Connected!'
9. Click on `Associate to Space`, choose the desired spaces and you're done!
 
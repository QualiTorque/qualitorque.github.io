---
sidebar_position: 7
title: Debugging Docker-based Agents
---

## Overview

This page provides guidance on troubleshooting common issues with Torque Docker agents. Whether you're encountering connection problems, permission errors, or other difficulties when running a Torque agent on a Docker host, this guide will help you diagnose and resolve them.

## Common Issues and Solutions

### 1. Agent Not Connecting to Torque Platform

**Symptoms:**
- Agent shows "Disconnected" status in the Torque portal
- No logs appearing in the agent's log viewer
- Error messages about network connectivity

**Troubleshooting Steps:**
1. Check if the Docker container is running:
   ```bash
   docker ps
   ```
   
2. Verify agent logs:
   ```bash
   docker logs <agent-container-name>
   ```

3. Ensure outbound network connectivity to Torque services:
   - Test access to `portal.qtorque.io`
   - Check firewall rules on your Docker host

4. Confirm the agent registration token is valid and hasn't expired.

### 2. Permission/Authentication Errors

**Symptoms:**
- Agent fails to authenticate with cloud providers
- Deployment failures when using cloud credentials
- "Permission denied" errors in logs

**Troubleshooting Steps:**
1. Verify that your Docker host has the necessary access permissions for cloud resources.
2. Check that credential files or environment variables are properly configured within the agent container.
3. Ensure proper IAM roles attached to EC2 instance profile if using AWS (for EKS deployment).
4. Validate that any service accounts configured on the Docker host have sufficient access.

### 3. Network/Container Communication Issues

**Symptoms:**
- Agent connects but cannot reach cloud providers
- Timeouts during deployments
- Unable to execute environment operations

**Troubleshooting Steps:**
1. Verify DNS resolution within the agent container:
   ```bash
   docker exec -it <agent-container-name> nslookup portal.qtorque.io
   ```
   
2. Test network connectivity:
   ```bash
   docker exec -it <agent-container-name> ping portal.qtorque.io
   ```

3. Check that required ports are open and not blocked by firewall.
4. Ensure proper Docker networking configuration for the container.

## Useful Commands

- **View agent status:**
  ```bash
  docker ps | grep torque-agent
  ```

- **View agent logs:**
  ```bash
  docker logs <agent-container-name>
  ```

- **Test connectivity:**
  ```bash
  curl -v http://portal.qtorque.io/hub/agent
  ```

## Additional Resources

For more detailed information about Docker agents and their setup, refer to:
- [Torque Docker Agent Installation Guide](torque-docker-agent.md)
- [Install and Connect Self-Hosted Agent](Install-and-connect-self-hosted-agent.md)
- [Agent Requirements](agent-requirements.md)

If issues persist, contact Torque support with agent logs for further investigation.
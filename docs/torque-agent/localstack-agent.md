---
sidebar_position: 7
title: LocalStack Agent
---

## Overview

The LocalStack Agent is a new agent type available when adding agents in the Torque platform. This agent allows users to connect to LocalStack services for development and testing environments, supporting both Kubernetes and Docker deployment options.

## Adding a LocalStack Agent

When adding a new agent in the Administration page:

1. Navigate to **Administration** → **Cloud Accounts** 
2. Click **Connect a Cloud**
3. Select the **LocalStack** logo
4. Choose your deployment technology:
   - **Kubernetes** 
   - **Docker**

## Required Fields

When creating a LocalStack agent, you must provide:

- **Agent Name**: A unique name for your agent (required)
- **AWS Endpoint URL**: The endpoint URL for your LocalStack service (required)

## Deployment Options

### Kubernetes
Create agents that run on Kubernetes clusters using the LocalStack deployment method.

### Docker 
Create agents that run in Docker containers using the LocalStack Docker images.

## Configuration

Once you've added your LocalStack agent, it will appear in the list of available agents for your environments. You can then select this agent when creating environments or blueprints that require LocalStack connectivity.
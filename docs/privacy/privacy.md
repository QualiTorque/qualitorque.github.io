---
sidebar_position: 3
title: Privacy
---

When you use our services, you trust us with your personal information. At Quali, we take your privacy very seriously. In this article, we describe our privacy policy, the information we collect, how we use it and what rights you have in relation to it. This includes personal information you voluntarily share with us when registering with Torque, cloud account and authentication details, git repository data, and more.

## Personal information 

* Contact data (First name, last name, email address) 
* Social media login data (Username/email address when registering with a git account)
* Password of non-SSO users

## Confidential information  

* Account data 
    * [SSO](/admin-guide/sso) status (enabled or not) (optional) 
    * Git repositories ([GitHub](/admin-guide/source-control/source-control-github), [GitLab](/admin-guide/source-control/source-control-gitlab), [self-managed](/admin-guide/source-control/source-managed-self-service))
        * User authentication/credentials 
        * [IaC](/overview/supported-platforms#infrastructure-as-code) asset files. For example: Terraform, Helm, Kubernetes manifests. For more details, see [Discover Your Assets](/getting-started/Discover%20Your%20Assets)
    * [Agents](/torque-agent/Install-and-connect-self-hosted-agent) 
    * Role that allows cost information gathering - [AWS](/governance/cost-tracking/configuring-cost-aws), [Azure](/governance/cost-tracking/configuring-cost-azure), [Kubernetes](/governance/cost-tracking/configuring-cost-k8s) (optional)
    * Cloud authentication data for Terraform deployments on [EKS](/torque-agent/service-accounts-for-aws), [AKS](/torque-agent/service-accounts-for-azure), or [GKE](/torque-agent/service-accounts-for-gcp)
    * [Parameters](/admin-guide/params) (optional) 
* Ongoing usage data 
    * Environment history  
        * Cloud resources deployed as part of the environment. See [Launch Your Blueprint](/getting-started/Getting starting with terraform)
        * Events 
    * [Cost](/governance/cost-tracking/cost) information (optional) 
    * [Audit Log events](/governance/audit-log/events)

## What does Torque connect to 

* [Cloud account](/torque-agent/Install-and-connect-self-hosted-agent)
* [Git repositories](/torque-agent/Install-and-connect-self-hosted-agent)
* Optional integrations - will be provided soon
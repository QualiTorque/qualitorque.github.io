---
sidebar_position: 7
title: Quali-hosted agent limitations
---

## Limitations
It can provision environments with the following limitations:
- Only a single environment can be provisioned using the Quali-hosted agent
- The environment must have only a single asset (grain), which is a terraform module
- At this point, the Quali-hosted agent can only provision environments in __AWS__ or __Azure__ using __terraform modules__ by using the terraform __AWS provider__ and __azurerm provider__ respectively. Support for other providers as well as other deployment technologies (such as helm) and clouds will be added gradually.
- To provision environments using other terraform providers, please install your own hosted agent, which supports the suitable cloud and provider. See [Install and connect a self-hosted agent](/getting-started/Install-and-connect-self-hosted-agent) .


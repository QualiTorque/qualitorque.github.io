---
sidebar_position: 3
title: Audit Log Configuration
---

Torque provides integration with Elastic Stack, allowing you to easily monitor and audit your system users' behavior, investigate and remove security risks and vulnerabilities, and more. Once integrated, Torque begins capturing events and streams them to Elastic Stack for analytics, allowing you to gain visibility into key platform events within your account, identify the most active policies, significant changes in resource operations, or filter actions by user and space.

## Licensing
Audit log integration is available for Enterprise plan only and requires a specific pricing feature.

## Prerequisites
* Working Elastic Stack server with internet access

## Configuration
1. In Torque, access your space.
2. Click __REST API__ in the left pane.
3. Expand __Settings__ and click __Update audit provider__.
4. Specify the following details
   * __type__ of log management system - "elasticsearch"
   * __url__ of the Elastic server
   * __username__ and __password__ of the Elastic Stack admin.
   * __Certificate__: Optionally specify a certificate if you wish to secure the connection.
  
5. Click __Send API Request__ and make sure it completes successfully.
   For example:
   > ![Locale Dropdown](/img/update-audit-provider.png) 
6. To make sure everything was configured properly, run the __Get audit provider__ API.
   > ![Locale Dropdown](/img/get-audit-provider.png)   
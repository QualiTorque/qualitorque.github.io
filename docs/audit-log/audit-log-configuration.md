---
sidebar_position: 3
title: Audit Log Configuration
---

Torque provides integration with Elastic Stack, allowing you to easily monitor and audit your system users' behavior, investigate and remove security risk and vulnerabilities, and more. Once integrated, Torque captures and streams Torque events for analytics, allowing you to gain visibility into key platform events within your account, identify the most active policies, significant changes in resource operations, or filter actions by user and space.

## Licensing
Audit log integration is available for Enterprise plan only and requires a specific pricing feature

## Configuration
1. In Torque's __Administration__ page, click __Audit Log__.
2. Click __Add audit target__.
3. Select the destination type.
4. Specify the audit log system's inputs:
   * __Destination URL__
   * __Username__
   * __Password__
   * __Certificate__: Optionally specify a certificate if you wish to secure the connection.
5. Click __Save__.
6. To make sure everything was configured properly, click __Send a test event__.

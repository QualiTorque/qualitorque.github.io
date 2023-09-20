---
sidebar_position: 2
title: Audit Log Overview
---

Torque provides integration with Elastic Stack, allowing you to easily monitor and audit your system users' behavior, investigate and remove security risks and vulnerabilities, and more. Once integrated, Torque begins capturing events and streams them to Elastic Stack for analytic data, allowing you to gain visibility into key platform events within your account, identify the most active policies, significant changes in resource operations, or filter actions by user and space.

```jsx title=
inputs:
    {
  "_index": "quali",
  "_type": "_doc",
  "_id": "E_TV54QBoWVq8-70aD22",
  "_score": 1,
  "_source": {
    "name": "EnvironmentTerminationStarted",
    "event_type": "environment",
    "event_status": "success",
    "scope": {
      "environment": "u9FQhalUq6yh",
      "space": "shai",
      "account": "trial-e1a4eb56d"
    },
    "actor": {
      "actor_type": "user",
      "details": {
        "user_email": shai.p@quali.com
      }
    },
    "timestamp": "2022-12-06T14:27:08.6804874Z",
    "traceId": "bc208caa38fd248f89dfcd87a7b5f8f1",
    "data": {
      "isForced": "False"
    },
    "errors": []
  }
```

## Licensing
Audit log integration is available for Enterprise plan only and requires a specific pricing feature.

---
sidebar_position: 13
title: Audit Log Event Examples
---

## Environment Termination Started
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

## Modify Space

```jsx title=
{
  "_index": "quali",
  "_type": "_doc",
  "_id": "gvTP54QBoWVq8-70Wjbt",
  "_score": 1,
  "_source": {
    "name": "ModifySpace",
    "event_type": "space",
    "event_status": "success",
    "scope": {
      "space": "shai",
      "account": "trial-e1a4eb56d"
    },
    "actor": {
      "actor_type": "user",
      "details": {
        "user_email": shai.p@quali.com
      }
    },
    "timestamp": "2022-12-06T14:20:31.9277719Z",
    "traceId": "0HMMNHE1FKRSJ:00000002",
    "data": {
      "oldProperties": "name: shai, color: blueGrey, icon: string",
      "newProperties": "name: shai, color: mediumBlue, icon: string"
    },
    "errors": []
  }
```

## Send User Invitation

```jsx title=
{
  "_index": "quali",
  "_type": "_doc",
  "_id": "UPTM54QBoWVq8-70hTND",
  "_score": 1,
  "_source": {
    "name": "SendUserInvitations",
    "event_type": "user",
    "event_status": "success",
    "scope": {
      "account": "trial-e1a4eb56d"
    },
    "actor": {
      "actor_type": "user",
      "details": {
        "user_email": shai.p@quali.com
      }
    },
    "timestamp": "2022-12-06T14:17:25.9601823Z",
    "traceId": "0HMMNHE1FKRNB:00000002",
    "data": {
      "emails": ghrt@gmail.com,
      "reason": "TeamMemberJoinSpace",
      "spaceName": "Sample",
      "givenSpaceRole": "Space Member"
    },
    "errors": []
  }
```
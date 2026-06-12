---
sidebar_position: 1
title: Webhook Payload Schema
---

This document describes the JSON payload sent per event for Generic Webhook notification targets.

## Top-level Payload Envelope

All webhook events are sent with this envelope:

```json
{
  "EventType": "string",
  "Token": "string|null",
  "EventData": "object (shape depends on EventType)",
  "UserEmail": "string|null"
}
```

## Webhook Headers

For Generic Webhook notifications, the service also sends:

- `X-Torque-EventType`: Same value as `EventType`
- `X-Torque-Token`: Included only when a token is configured

## EventData Schemas by EventType

## 1) Environment Lifecycle/Action Events

`EventType` values:

- `EnvironmentLaunchScheduled`
- `EnvironmentLaunchCancelled`
- `EnvironmentLaunched`
- `EnvironmentDeployed`
- `EnvironmentActiveWithError`
- `EnvironmentEnded`
- `EnvironmentEndingFailed`
- `EnvironmentForceEnded`
- `EnvironmentIdle`
- `WorkflowStarted`
- `WorkflowFailed`
- `EnvironmentExtended`
- `EnvironmentRescheduled`
- `ActionFailed`

`EventData` shape:

```json
{
  "id": "string",
  "Owner": "guid",
  "definition": {
    "metadata": {
      "name": "string",
      "space_name": "string",
      "automation": "boolean",
      "blueprint": "string",
      "blueprint_name": "string"
    }
  },
  "state": {
    "current_state": "string",
    "outputs": [
      {
        "name": "string",
        "value": "string",
        "kind": "string"
      }
    ]
  },
  "computed_status": "string",
  "workflow_name": "string"
}
```

## 2) Blueprint Events

`EventType` values:

- `BlueprintPublished`
- `BlueprintUnpublished`

`EventData` shape:

```json
{
  "EventType": "string",
  "SpaceId": "string",
  "UseSubscription": "guid|null",
  "State": "number (enum)",
  "SpaceName": "string",
  "BlueprintId": "string",
  "BlueprintName": "string",
  "RepositoryName": "string|null"
}
```

## 3) Drift Detected

`EventType`: `DriftDetected`

`EventData` shape:

```json
{
  "EventType": "DriftDetected",
  "SpaceId": "string",
  "UseSubscription": "guid|null",
  "SpaceName": "string",
  "EnvironmentId": "string",
  "EnvironmentName": "string",
  "BlueprintName": "string",
  "OwnerName": "string",
  "OwnerEmail": "string",
  "CollaboratorsDetails": [
    {
      "Name": "string",
      "Email": "string"
    }
  ],
  "GrainPath": "string",
  "StartTime": "datetime"
}
```

## 4) Updates Detected

`EventType`: `UpdatesDetected`

`EventData` shape:

```json
{
  "EventType": "UpdatesDetected",
  "SpaceId": "string",
  "UseSubscription": "guid|null",
  "SpaceName": "string",
  "EnvironmentId": "string",
  "EnvironmentName": "string",
  "BlueprintName": "string",
  "OwnerName": "string",
  "OwnerEmail": "string",
  "CollaboratorsDetails": [
    {
      "Name": "string",
      "Email": "string"
    }
  ],
  "GrainPath": "string",
  "StartTime": "datetime"
}
```

## 5) Agent Disconnected

`EventType`: `AgentDisconnected`

`EventData` shape:

```json
{
  "EventType": "AgentDisconnected",
  "SpaceId": "string",
  "UseSubscription": "guid|null",
  "SpaceName": "string",
  "AgentName": "string",
  "Recipients": [
    {
      "id": "guid",
      "email": "string",
      "name": "string"
    }
  ]
}
```

## 6) Repository Disconnected

`EventType`: `RepositoryDisconnected`

`EventData` shape:

```json
{
  "EventType": "RepositoryDisconnected",
  "SpaceId": "string",
  "UseSubscription": "guid|null",
  "SpaceName": "string",
  "RepositoryName": "string",
  "Recipients": [
    {
      "id": "guid",
      "email": "string",
      "name": "string"
    }
  ]
}
```

## Notes

- `EventType` is the discriminator for parsing `EventData`.
- In environment lifecycle/action events, `EventData` is reduced to `EnvironmentData`.
- Depending on runtime context, some fields may be omitted or null.

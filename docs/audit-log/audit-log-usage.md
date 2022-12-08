---
sidebar_position: 5
title: Audit Log Event Structure and Contents
---

Torque audit data is presented in json format. It includes events and with the following information:
  * Timestamp (UTC)
  * Event Type
  * Event Name
  * Actor (User/Automation/Torque)
  * Scope (Account/Space/Environment)
  * Result (Success/Failure)
  * Error (in case of failure)
  * Event-specific Data

> ![Locale Dropdown](/img/audit-log-json.png)




## Event structure

__index__ containing the Torque events ("quali").

__type__ of the event ("doc)

__id__ of the event

__score__: 

__source__: Details about the event

|Element                                |Description                             |
|------------------------|----------------------------------------------------|
|name|Name of the event, as listed in [Events](#events)|
|event_type|Type of event. Options are account, space, bluperint, and environment.|
|event_status|Status of the event (success / failure)|
|scope|Scope(s) of the event, as listed under [Events](#events). Supported scopes are account, space, blueprint, and environment.|
|actor|Initiator of the event. Options are user, automation, and torque.|
|timestamp|Time at which the event occurred.|
|traceid|Used for internal purposes.|
|data|Changes that were made in the event, as listed in [Events](#events)|.
|errors|Errors returned for failed events (http status code and description)|

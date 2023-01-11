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

|Element                                |Description                             |
|------------------------|----------------------------------------------------|
|name|Name of the event, as listed in [Audit Log Events](/admin-guide/governance/audit-log/events)|
|event_type|Type of event. Options are account, space, bluperint, and environment.|
|event_status|Status of the event (success / failure)|
|scope|Scope(s) of the event, as listed under [Audit Log Events](/admin-guide/governance/audit-log/events). Supported scopes are account, space, blueprint, and environment.|
|actor|Initiator of the event. Options are user, automation, and torque.|
|timestamp|Time at which the event occurred.|
|traceid|Used for internal purposes.|
|data|Changes that were made in the event, as listed in [Audit Log Events](/admin-guide/governance/audit-log/events)|.
|errors|Errors returned for failed events (http status code and description)|

---
sidebar_position: 5
title: Audit Log Usage
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

## Data retention
Audit data is streamed to the configured log management tool and retained according to the tool's data retention policy.

## Events
The following events are captured and streamed:

__Environments__
* Environment Launch Started
* Environment Launch Completed
* Drift Detected
* Drift Reconcile Started
* Drift Reconcile Completed
* Drift Dismissed
* Updates Detected
* Update started
* Update Complete
* Update Dismissed
* Terminate Started
* Terminate completed
* Force terminate

__Account__
* Created
* Deleted

__Space__
* Create
* Modify
* Delete

__User__
* Invited
* Invitation Cancelled
* Joined
* Modified
* Deleted
* Login
* Logout
* Reset Password
* Forgot Password
* User Added to Space

__Host/Agent__
* Created
* Deleted 
* Deleted
* Added to Space
* Removed From Space
* Renamed
---
sidebar_position: 7
title: Audit Log Events
---

These events are captured by Audit Log.

## Account

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-------------------------|-----------------------------------|--------------------------------------------|
|Login|Login to account|Account||
|Deleted|Account was deleted.|Account|planId|

## Blueprint

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|---------------------------|-----------------------------------|--------------------------------------------|
|Content Modified|Blueprint YAML was modified.|Account/Space/Blueprint||
|Published|Blueprint was published|Account/Space/Blueprint.|- Repository name|
|Removed|Blueprint was removed from a space (removed from an asset repository connected to the space).|Account/Space/Blueprint||
|Unpublished|Blueprint was unpublished.|Account/Space/Blueprint|- Repository name|

## Cloud Account (cost target)

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|--------------------------|-----------------------------------|--------------------------------------------|
|Created|Cloud account was created.|Account|- Name<br />- Cloud|
|Deleted|Cloud account was deleted.|Account|- Name<br />- Cloud|

## Cost

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|----------------------------------|-----------------------------------|--------------------------------------------|
|Exported|Cost data was exported using the __Cost__ page's __Export to CSV__ button.|Account|||

## Credential

|Event                   |Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|
|Created|Account|- Name<br />- Cloud type<br />- Credential type|
|Deleted|Account|- Name|
|Modified|Account|- Name|

## Environment

|Event                   |Description|Scopes                             |Data (parameters)  |
|------------------------|---------------------------------|-----------------------------------|--------------------------------------------|
|Collaborators Added|Collaborators were added to an environment.|Account/Space/Environment|- New collaborators list|
|Collaborators Removed|Environment's collaborators were removed.|Account/Space/Environment|- Removed collaborators list|
|Drift Detected|Environment was changed.|Account/Space/Environment||
|Drift Reconcile Started|Environment's Reconcile operation was initiated to reset the environment to its original state.|Account/Space/Environment|- Grain|
|Drift Reconcile Completed|Environment's Reconcile operation completed.|Account/Space/Environment|- Grain|
|Environment Extended|Environment's duration was extended.|Account/Space/Environment|- Extension duration|
|Environment Launch Started|Environment was launched.|Account/Space/Environment||
|Environment Launch Completed|Environment's launch completed and the environment's state changed to Active.|Account/Space/Environment|- Duration|
|Environment Termination Started|Environment's termination was initiated.|Account/Space/Environment||
|Environment Termination Completed|Environment's termination completed.|Account/Space/Environment||
|Force Terminate|Environment was force terminated immmediately.|Account/Space/Environment||
|Owner changed|Environment's owner was changed.|Account/Space/Environment|- New owner|
|Updates Detected|Environment's asset files were changed.|Account/Space/Environment|- Grain|
|Update Started|Environment's update was initiated by the user to update the environment with the latest changes to the asset files.|Account/Space/Environment|- Grain|
|Update Complete|Environment was updated.|Account/Space/Environment|- Grain|
|Update Dismissed|User dismissed updates to the asset files, choosing to leave their environment as is.|Account/Space/Environment|- Grain|

## Host/Agent

|Event                   |Description||Scopes                             |Data (parameters)                                 |
|------------------------|-------------------------------|-----------------------------------|--------------------------------------------|
|Added to Space|Added an execution agent to a space.|Account/Space|- Name<br />- Cloud<br />- Type (Docker, Kubernetes), Space|
|Created|Created a new execution agent.|Account|- Name<br />- Cloud<br />- Type (Docker, Kubernetes)|
|Connected|Execution agent was successfully connected to the cluster.|Account|- Name<br />- Cloud<br />- Type (Docker, Kubernetes)|
|Deleted|Execution agent was deleted from Torque.|Account|- Name<br />- Cloud<br />- Type (Docker, Kubernetes)|
|Removed From Space|Execution agent was removed from a space.|Account/Space|- Name<br />- Cloud<br />- Type (Docker, Kubernetes), Space|

## Notification

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|---------------------|-----------------------------------|--------------------------------------------|
|Added|New notification target was created.|Account, Space|- Name<br />- Target| 
|Deleted|Notification target was deleted from Torque.|Account/Space|- Old name<br />- New name<br />- Old target type<br />- New target type|
|Enabled Toggled|Notifications were enabled for a notification target.|Account/Space|- Name<br />- Old enabled <br />- New enabled|
|Modified|Notification target was modified (name, eanbled notifications, etc.|Account/Space|- Name|

## Parameter

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|----------------------|-----------------------------------|--------------------------------------------|
|Created|New parameter was created in the __Parameters__ store.|Account or Account/Space|- Name (parameter event)<br />- Sensitive<br />- Value<br />- Description|
|Deleted|Parameter was deleted from the __Parameters__ store.|Account or Account/Space|- Name (parameter event)|
|Modified|Parameter's settings were modified.|Account or Account/Space|- Name (parameter event)<br />- oldIsSensitive<br />- newIsSensitive|

## Policy

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-------------------------|-----------------------------------|--------------------------------------------|
|Created|New policy was created in the __Policies__ administration page.|Account or Account/Space|- Name (policy event)<br />- isCustom<br />- spaceNames (if created on the space level)|
|Deleted|Policy was deleted from Torque.|Account or Account/Space|- Name (policy event)|

## Repository

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|
|Assets Discovered|Assets were discovered from a space's asset repository.|Account/Space|Name|
|Connected|Asset repository was connected to a space.|Account/Space|- Name- Type- Branch- Url|
|Disconnected|Asset repository was disconnected from a space.|Account/Space|Name|


## Space

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|
|Create|New space was created in Torque.|Account/Space||
|Modify|Space's settings were modified (name, icon, banner color).|Account/Space|- Old properties (name, color, icon)<br />- New properties (name, color, icon)|
|Delete|Space was deleted from Torque.|Account/Space||

## User

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|
|Invited|User was invited to join Torque (Torque invitation email).|Account|- user email|
|Invitation Cancelled|Torque invitation was cancelled by an admin.|Account|- User email<br />- User role<br />- Space|
|Sign up|New user signed up to Torque.|Account|- user email|
|User Account Role Updated|User's account role was changed (or attached - for new users).|Account|- User email<br />- Old role<br />- New role|
|Deleted|User was deleted from Torque.|Account|- User email|
|Login|User logged into Torque.|Account|- User email|
|Reset Password|User's password was reset.|Account|- User email|
|User Added to Space|User was added to a space.|Account/Space|- User email<br />- Reason<br />- Space name<br />- Given space role|
|User Space Role Updated|User's space role was changed (space admin/dev/member).|Account|- User email<br />- Old role<br />- New role|

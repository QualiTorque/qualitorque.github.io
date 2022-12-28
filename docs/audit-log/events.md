---
sidebar_position: 7
title: Audit Log Events
---

These events are captured by Audit Log. All events are of type "string".

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
|Removed|User removed blueprint. This applies to blueprints that were discovered from assets, not for blueprints who are defined in the repository.||
|Unpublished|Blueprint was unpublished.|Account/Space/Blueprint|- Repository name|

## Cloud Account (cost target)

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|--------------------------|-----------------------------------|--------------------------------------------|
|Created|Cloud account was created.|Account|- Name<br />- Cloud|
|Deleted|Cloud account was deleted.|Account|- Name<br />- Cloud|

## Cost

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|----------------------------------|-----------------------------------|--------------------------------------------|
|Exported|Cost data was exported using the __Cost__ page's __Export to CSV__ button.|Account||

## Credential

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|----------------------------------|-----------------------------------|--------------------------------------------|
|Created|New credential was created in the __Credentials__ store.|Account|- Name<br />- Cloud Type<br />- Credential Type|
|Deleted|A credential was deleted.|Account|- Name|
|Modified|A credential was modified.|Account|- Name|

## Environment

|Event                   |Description|Scopes                             |Data (parameters)  |
|------------------------|---------------------------------|-----------------------------------|--------------------------------------------|
|Collaborators Added|Collaborators were added to an environment.|Account/Space/Environment|- list of new collaborators|
|Collaborators Removed|Environment's collaborators were removed.|Account/Space/Environment|- list of removed collaborators|
|Drift Detected|Environment's resources were modified externally.|Account/Space/Environment|- Grain|
|Drift Reconcile Started|Environment's __Reconcile__ operation was initiated to reset the environment to its original state.|Account/Space/Environment|- Grain|
|Drift Reconcile Completed|Environment's Reconcile operation completed.|Account/Space/Environment|- Grain|
|Environment Extended|Environment's duration was extended.|Account/Space/Environment|- Extension Duration|
|Environment Launch Started|Environment was launched.|Account/Space/Environment||
|Environment Launch Completed|Environment's launch completed and the environment's state changed to Active.|Account/Space/Environment|- Duration|
|Termination Started|Environment's termination was initiated.|Account/Space/Environment||
|Termination Completed|Environment's termination completed.|Account/Space/Environment||
|Force Terminate|Environment was force terminated immmediately.|Account/Space/Environment||
|Owner changed|Environment's owner was changed.|Account/Space/Environment|- New owner|
|Updates Detected|Torque detected a change in the asset files in the repository.|Account/Space/Environment|- Grain|
|Update Started|Environment's update was initiated by the user to update the environment with the latest changes to the asset files.|Account/Space/Environment|- Grain|
|Update Complete|Environment was updated.|Account/Space/Environment|- Grain|
|Update Dismissed|User dismissed updates to the asset files, choosing to leave their environment as is.|Account/Space/Environment|- Grain|

## Host/Agent

|Event                   |Description||Scopes                             |Data (parameters)                                 |
|------------------------|-------------------------------|-----------------------------------|--------------------------------------------|
|Added to Space|Added an agent to a space.|Account/Space|- Host name<br />- Cloud<br />- Type (Docker, K8s), Space|
|Created|Created a new agent.|Account|- Host name<br />- Cloud<br />- Type (Docker, K8s)|
|Connected|Agent was successfully connected to the cluster.|Account|- host_name<br />- Type (Docker, K8s)|
|Deleted|Sgent was deleted from Torque.|Account|- Host name<br />- Cloud<br />- Type (Docker, K8s)|
|Removed From Space|Sgent was removed from a space.|Account/Space|- Host name<br />- Cloud<br />- Type (Docker, K8s), Space|
|Renamed| Agent's name was changed.|Account|-old_host_name<br />- new_host_name<br />- type|

## Notification

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|---------------------|-----------------------------------|--------------------------------------------|
|Added|New notification target was created.|Account, Space|- Name<br />- Target| 
|Deleted|Notification target was deleted from Torque.|Account/Space|- Old Name<br />- New Name<br />- Old Target type<br />- New Target type|
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
|Assets Discovered|Assets were discovered from a space's repository.|Account/Space|Name|
|Connected|A repository was connected to a space.|Account/Space|- Name- Type- Branch- Url|
|Disconnected|A repository was disconnected from a space.|Account/Space|Name|


## Space

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|
|Create|New space was created in Torque.|Account/Space||
|Modify|Space's settings were modified (name, icon, banner color).|Account/Space|- oldProperties (name, color, icon)<br />- newProperties (name, color, icon)|
|Delete|Space was deleted from Torque.|Account/Space||

## User

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|
|Invited|User was invited to join Torque (Torque invitation email).|Account|- User Email|
|Invitation Cancelled|Torque invitation was cancelled by an admin.|Account|- User Email<br />- User Role<br />- Space|
|Sign up|New user signed up to Torque.|Account|- User Email|
|User Account Role Updated|User's account role was changed (or attached - for new users).|Account|- User Email<br />- oldRole<br />- newRole|
|Deleted|User was deleted from Torque.|Account|- User Email|
|Login|User logged into Torque.|Account|- User Email|
|Reset Password|User's password was reset.|Account|- User Email|
|User Added to Space|User was added to a space.|Account/Space|- User Email<br />- reason<br />- space name<br />- given space role|
|User Space Role Updated|User's space role was changed (space admin/dev/member).|Account|- User Email<br />- oldRole<br />- newRole|

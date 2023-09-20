---
sidebar_position: 1
title: Service Now
---

## __Flow overview__

Torque has a built-in integration with Service Now for approval flow. If your organization is using Service Now for ITSM, you can configure the integration and perform your approval flow through your Service Now portal.

> ![Locale Dropdown](/img/service_now_flow.png)

## __Prerequisites__
In order to configure the ServiceNow integration, you will need to have the Torque Integration XML file. Please contact Torque Support to get this file.


## 1. Install the ServiceNow Torque Application

   1. In Service Now, Go to -> `Retrieved Update Sets`
   2. In the bottom, there is a link: `Import Update Set from XML` click it, and choose the file you received from Torque support. 
   3. Select the record and press on `Preview Update Set` and then `commit`

## 2. Create a service user for Torque

   1. In Service Now, Create a dedicated user for Torque integration. This user does not need any special permissions in ServiceNow, just to be able to login to the system.
   2. Take note of the username and password of this user, you will need this information in the next steps.

## 3. Approval Channel Configuration

1. In Torque:

   1. You will need a user in Toruqe that will be the approver for the approval channel. Note, currently only one approver can be assigned to each approval channel. The user can be one of your existing users, or a new one which can serve as a service user. This user does not have to be a real user in Torque, it is just a user for the purpose of this integration. This user needs to be a member of the space(s) where you want these approvals to be created. 
   To create a new user you should invite the new user via email. 
   2. Log in to the Torque UI as the approver user from step 1, and create an API token. See [Generating a new Torque API Token](/rest-api/torque_api_tokens.md) . Take note of the generated Token.

2. In ServiceNow:
   
     1. **Update Torque API token** :  Go to `sys_properties.list` and update `Torque_Token` with the value of the generated API token.
     2. **Update Torque Base URL** Go to `Connection & Credential Aliases` and click on `Torque`
     3. Add a new connection by clicking the `New` button:
     > ![Locale Dropdown](/img/service_now_new.png)
     4. In case you have a connection just edit the record with the correct URL:
     > ![Locale Dropdown](/img/service_now_url.png)

3. In Torque:

     1. Navigate to `Administration` -> `Approval Channels`
     2. On the top right corner, click on `Add Channel`.
     3. Fill a name and description of your choice and click on the ServiceNow icon.
     4. Fill the following details:
        1. ServiceNow address URL - your base service now tenant URL. For example: https://mytenant.service-now.com/
        2. Username - The Torque dedicated ServiceNow user which you created in [Step 2](#2-create-a-service-user-for-torque)
        3. Password - The Torque dedicated ServiceNow password of the same user
        4. Approvers - the Torque approver user which you selected/created in step 3.1. It must be the same user to which the Torque token belongs.


4. In ServiceNow: Review Approval Flow template

   1. Go to `Flow Designer -> Flows` and select type in the searchbox for “Torque Request”.
   2. Select it and configure approvers under `Ask for Approval` action:
   > ![Locale Dropdown](/img/service_now_torque_request.png)

The approvers don't have to be Torque users.

5. In ServiceNow: View approval flow

   1. Go to `Flow Designer -> Executions` and select the relevant executed flow:
   > ![Locale Dropdown](/img/service_now_approval_flow.png)


:::tip
You can create multiple approval channels for service now, each can have different approvers for different spaces.
Repeat the configuration steps for each channel.
:::


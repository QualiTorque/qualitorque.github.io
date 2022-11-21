---
sidebar_position: 7
title: Notifications
---

Torque Notifications enable space admins to define notifications for environment lifecycle events. The notifications will be sent to your email address, Teams or Slack chats, or the automation tool of your choice. You can define multiple notifications for different communication tools, and for different channels in the same communication tool. 

Supported environment events:

* Sandbox started
* Sandbox ready
* Sandbox ended
* Sandbox active with errors
* Sandbox ended with errors
* Blueprint published
* Blueprint unpublished

__To configure Torque notifications:__
1. In Torque, access the suitable space.
2. Click __Settings > Notifications__.
3. Click __+ Add Notification__.
4. Select the suitable communication tool (Slack, Teams, or generic webhook).
  > ![Locale Dropdown](/img/notifications.png)
5. Provide a __Name__ for the notification.
6. Enter the webhook address, as explained in the desired tool’s official documentation.
   * For Slack, see https://api.slack.com/messaging/webhooks.
   * For Teams, see https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook.
   * For your preferred automation tool, see the tool’s documentation.
   * This step is not needed for Email, as we'll configure the notifications to be sent to the logged-in user's email address. 
7. For generic webhooks, optionally provide a token from the tool to send with the notification, and select the desired event to test.
8. Test the configuration.
9. Click __Send Test Message__ and make sure you receive a Torque notification message in the chat or generic tool.
10. Click __Select Notifications__ to select the notifications to send.
11. Click __Apply__.

---
sidebar_position: 4
title: Notifications
---

Torque Notifications enable space admins to define notifications for sandbox lifecycle events. The notifications will be sent to Teams or Slack chats, or the automation tool of your choice. You can define multiple notifications for different communication tools, and for different channels in the same communication tool. 

Supported sandbox events:

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
5. Provide a __Name__ for the notification.
6. Enter the webhook address, as explained in the desired tool’s official documentation.
   * For Slack, see https://api.slack.com/messaging/webhooks.
   * For Teams, see https://techcommunity.microsoft.com/t5/microsoft-365-pnp-blog/how-to-configure-and-use-incoming-webhooks-in-microsoft-teams/ba-p/2051118.
   * For your preferred automation tool, see the tool’s documentation.
7. Test the configuration. 
   * For generic webhooks, optionally provide a token from the tool to send with the notification, and select the desired event to test.
8. Click __Send Test Message__ and make sure you receive a Torque notification message in the chat or generic tool.
9. Click __Select Notifications__ to select the notifications to send.
10. Click __Apply__.

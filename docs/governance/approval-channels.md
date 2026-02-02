---
sidebar_position: 10
title: Approval Channels
---

<ProductName /> role: Account admin

While organizations typically want to enable their users to launch environments quickly and easily, in certain situations it may be necessary to put guardrails in place to ensure compliance with security policies or budget constraints. Defining an approval flow can provide an effective way to balance the need for agility and control.

<ProductName />'s Approval channels define the users who can approve environment launch requests. An approval channel is basically a list of users. Currently, <ProductName /> supports 3  approval channels - Teams, Emails, and ServiceNow.

__To create an approval channel:__
1. Go to __Administration > Approval Channels__.
2. Click __Add Channel__.
3. Give the approval channel a __Name__ and optionally a __Description__.
4. Select the channel - Teams, Email or Service Now.
5. For Teams, enter the __Webhook address__.
6. For Service Now, please see [the following article](/eco-system/itsm-tools/service-now.md) for instructions.
7. Select the __Approvers__.
8. Click __Save__.
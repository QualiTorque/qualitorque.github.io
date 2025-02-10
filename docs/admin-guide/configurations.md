---
sidebar_position: 1
title: Configurations
---

__Overview__

The Configuration page consolidates key system settings and administrative configurations for account management. This page replaces two older settings pages, streamlining access to critical configuration options

---

### 1. White Labeling

Customize the Torque interface with your organization's branding by uploading a custom logo. This ensures a **consistent and professional** look throughout the platform.

This feature allows you to:  
- Replace the default Torque logo across the system.  
- Upload three logo types: Favicon, Wide Logo, and Square Logo.  
  
**How to upload your logo**

1.  Navigate to **Configuration > White Labeling**.
2.  Upload all three recommended logo types:

-   **Favicon** – Appears in the browser tab.
-   **Wide Logo** – This logo will appear in the header section of your website or application
-   **Square Logo** – This logo will appear in places where a square image is needed, such as social media profile pictures.

3. Confirm that your logo uploads successfully.

:::info 🔒  White Labeling is optionally available for **Enterprise plans only**.:::

---

### 2. Announcements

  
Use the **Announcements** feature to display **important messages across the platform** with a banner at the top of every page.  
  
This feature allows you to create and manage announcement banners to notify users about critical updates. You can:  
- Set banners for specific spaces or apply them globally.  
- Customize the message, and banner color.  
- Enable Maintenance Mode to prevent environment launches in selected spaces.

**How to set up an Announcement**

1.  Navigate to **Configuration > Announcements**.
2.  Use the ‘Preview Mode’ toggle to see how your banner will eventually look like.
3.  Enter your message and customize the **banner color**.
4.  Choose specific **spaces** to display the announcement or apply it system-wide.
5.  Enable the **Maintenance Mode** if needed. This mode enables preventing selected spaces from launching new environments during your scheduled downtime.
6.  Save changes to instantly publish the announcement.

---

### 3. Audit Logs

Torque’s **Audit Logs** provide comprehensive tracking of key platform activities, helping you monitor user behavior, investigate security risks, and maintain compliance.  
Options include:  
- ElasticSearch: With built-in **Elastic Stack integration**, you can forward audit data for real-time analysis and reporting.  
- Torque Audit: Forward logs to Torque, and retain for 18 months..  
  
**How to set up an Audit Log destination**  
📖 Learn more about [Torque Audit](/governance/audit-log/audit-log-configuration)
  
:::info 🔒  Audit log integration is  available for **Enterprise plans only** and requires a specific licensing feature.:::

---

### 4. Copilot Settings

Enable Torque’s AI-powered assistant to provide recommendations and enhance workflow automation, within your account.  
  
These settings include 2 features:  
**1. Torque Copilot** – Easily navigate Torque with our AI chatbot, always accessible and leveraging the official documentation for swift exploration.  
(This feature is based on a 3rd party tool called DocsBot)  
![DocsBot](/img/docsbot.png)

**How to enable Torque Copilot**

1.  Navigate to **Configuration > Copilot Settings**.
2.  Toggle on the ‘Torque Copilot’ toggle to show the AI chatbot button at the top header, next to the rest of the utilities.
3.  Toggle off to hide the AI chatbot and to prevent access from all users.

**2. Cloud Copilot** – Your internal AI assistance to create and customize Blueprints, auto-generate descriptions, and resolve live environment errors.  
This AI assistant tool is subject to the [Torque MSA](https://www.quali.com/legal-torque-master-subscription-agreement/) and requires user consent.  
  
With this feature you can:  
- **Auto-generate descriptions** for blueprints, to effortlessly expand the details on every blueprint in the account.  
- **(Blueprint) Cloud Copilot** - Create and customize blueprints from your Building Blocks Library, using simple language prompts and the power of AI.
![Cloud Copilot](/img/cloud_copilot_panel.png)

- **AI Insights** - Get AI assistant when you need it. Resolve issues in live environments, by clicking the “Get AI Insights” button, on every error log in your environment. 
![AI Insights](/img/ai_insights.png)



**How to Enable Cloud Copilot**

1.  Navigate to **Configuration > Copilot Settings**.
2.  Under the ‘Cloud Copilot’ section > click on the **‘AI Provider’ button** to select where to host your AI Data while using Copilot:  
    - Host in **Torque’s Open AI  
    **There’s no further configuration, just click ‘Connect’  
    - Host in your own **Azure OpenAI service  
    **You’ll have to provide: API key, Endpoint URL, GPT-4o deployment name, and GPT-4o mini deployment name.  
    - Host in your own **OpenAI  
    **You’ll have to provide only the API key.
3.  To apply this settings, it requires a specific licensing feature - please contact us to enable Cloud Copilot for the account.
4.  Once your request was applied, and your selected provider was connected successfully, you’ll be able to enjoy the Cloud Copilot capabilities.
5.  You can toggle off to hide all the Cloud Copilot capabilities and prevent access from all users.  


---



### 5. SSO Login

Streamline authentication with Single Sign-On (SSO) integration.  
  
**How to Enable SSO Login**

1.  Navigate to **Configuration > SSO Login**.
2.  To enable SSO, click ‘Send a Request’ to connect with an account manager.

- 📖 [How SSO Configuration Works](/admin-guide/sso)
  
:::info 🔒  SSO Login is optionally available for **Enterprise plans only**.:::


---


### 6. Email Reports  
Subscribe to the ‘Weekly Digest’, a summary email providing key account activity insights.  
Torque's weekly digest reports condense the most important information from a week's worth of data collected in Torque, making it easier for Torque administrators to quickly understand the most critical developments.  
Torque ‘Weekly Digest’ emails are being sent to Torque administrators and will highlight:

-   Cloud usage
-   Torque users activity
-   Environments usage
-   Cloud Cost
-   Top used IaC modules
-   Top contributors to the operation
![Weekly Digest Example](/img/mockup_weekly_digest.png)
  
**How to Enable Email Reports**

1.  Navigate to **Configuration > Email Reports**.
2.  Toggle on the ‘Email Report’ toggle to subscribe to the ‘Weekly Digest’ email report
3.  Toggle off to unsubscribe  

---

### 7. Approval Requests

Control the visibility of the Approval Requests page. Approval policies will still apply.  
  
**How to Enable Approval Requests**

1.  Navigate to **Configuration > Approval Requests**.
2.  Toggle the setting to **show or hide** the Approval Requests page.

:::info Notice that hiding the page does NOT prevent users from applying approval requests for launching, or extending environments.:::


  

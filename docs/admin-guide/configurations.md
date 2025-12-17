---
sidebar_position: 1
title: Configurations
---

__Overview__

The Configuration page consolidates key system settings and administrative configurations for account management. This page replaces two older settings pages, streamlining access to critical configuration options

---

### 1. White Labeling

Customize the <ProductName /> interface with your organization's branding by uploading a custom logo. This ensures a **consistent and professional** look throughout the platform.

This feature allows you to:  
- Replace the default <ProductName /> logo across the system.  
- Upload three logo types: Favicon, Wide Logo, and Square Logo.  
  
**How to upload your logo**

1.  Navigate to **Configuration > White Labeling**.
2.  Upload all three recommended logo types:

-   **Favicon** – Appears in the browser tab.
-   **Wide Logo** – This logo will appear in the header section of your website or application
-   **Square Logo** – This logo will appear in places where a square image is needed, such as social media profile pictures.

3. Confirm that your logo uploads successfully.

🔒  White Labeling is optionally available for **Enterprise plans only**.

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

<ProductName />’s **Audit Logs** provide comprehensive tracking of key platform activities, helping you monitor user behavior, investigate security risks, and maintain compliance.  
Options include:  
- ElasticSearch: With built-in **Elastic Stack integration**, you can forward audit data for real-time analysis and reporting.  
- <ProductName /> Audit: Forward logs to <ProductName />, and retain for 18 months..  
  
**How to set up an Audit Log destination**  
📖 Learn more about [<ProductName /> Audit](/governance/audit-log/audit-log-configuration)
  
info 🔒  Audit log integration is  available for **Enterprise plans only** and requires a specific licensing feature.

---

### 4. Copilot Settings

Enable <ProductName />’s AI-powered assistant to provide recommendations and enhance workflow automation, within your account.  
  
These settings include 2 features:  
**1. <ProductName /> Copilot** – Easily navigate <ProductName /> with our AI chatbot, always accessible and leveraging the official documentation for swift exploration.  
(This feature is based on a 3rd party tool called DocsBot)  
![DocsBot](/img/docsbot.png)

**How to enable <ProductName /> Copilot**

1.  Navigate to **Configuration > Copilot Settings**.
2.  Toggle on the ‘Torque Copilot’ toggle to show the AI chatbot button at the top header, next to the rest of the utilities.
3.  Toggle off to hide the AI chatbot and to prevent access from all users.

**2. Cloud Copilot** – Your internal AI assistance to create and customize Blueprints, auto-generate descriptions, and resolve live environment errors.  
This AI assistant tool is subject to the [<ProductName /> MSA](https://www.quali.com/legal-torque-master-subscription-agreement/) and requires user consent.  
  
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
  
info 🔒  SSO Login is optionally available for **Enterprise plans only**.


---


### 6. Email Reports  
Subscribe to the ‘Weekly Digest’, a summary email providing key account activity insights.  
<ProductName />'s weekly digest reports condense the most important information from a week's worth of data collected in <ProductName />, making it easier for administrators to quickly understand the most critical developments.  
The <ProductName /> ‘Weekly Digest’ emails are being sent to administrators and will highlight:

-   Cloud usage
-   Users activity
-   Environments usage
-   Cloud Cost
-   Top used IaC modules
-   Top contributors to the operation

Example:

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

:::tip __Important__
Notice that hiding the page does NOT prevent users from applying approval requests for launching, or extending environments.
:::

---

### 8.	Quick Launch

Enable your team to Quick Launch — this configuration skips the summary step and launches environments instantly.

When enabled by the account admin:
-> The 'Review Summary' step is removed.
-> You’ll see a single ‘Launch’ button for a quicker start.

**How to Enable Quick Launch**
1.	Navigate to **Configuration > Quick Launch**.
2.	Toggle the setting **ON to show only the ‘Launch’** button, no ‘Review Summary’ option.
3.	Toggle the setting **OFF to show only the ‘Review Summary’**. Users will be able to launch only after reviewing the summary.

![Quick Launch_May2025](https://github.com/user-attachments/assets/f778a556-21f7-4115-9a8d-4cde91357b33)

---

### 9.	Experimental Features

Experimental Features give account administrators early access to upcoming capabilities in <ProductName /> that are still in development. These features are in a **beta** or **testing phase** and may not yet be fully supported or stable.

This settings gives **<ProductName /> administrators early visibility and hands-on access** to major upcoming features and UI changes—allowing them to explore, prepare, and influence what’s coming before it rolls out to all users.
 

**What You Need to Know**
- 🔬 **Experimental features are optional** and intended for **evaluation and feedback purposes only**.
- 🧪 These features may contain bugs or incomplete functionality. Use with caution in production environments.
- 👤 **Only the admin who enables an experiment** will see the changes. No other users in the account will be affected.
- 📆 Each experiment includes a defined **trial period** with a description of what’s new.
- 📩 Admins can provide feedback via:
  -> A **survey form** linked within the experiment.
  -> A **support ticket** submitted through the <ProductName /> support system.

  
**How to Use Experimental Features**
1.	Navigate to **Configuration > Experimental Features**.
2.	Review the list of available experiments.
3.	Click the toggle next to an experiment to **enable or disable** the feature **for yourself only**.
4.	Try out the new feature and explore the changes.
5.	Submit feedback via the linked survey or by opening a support ticket.
 
 
**After the Experiment Period**

Once the experiment ends:
-	The feature will be **evaluated based on admin feedback**.
-	If approved, it will be officially released and made **available to all users** in the account.
-	You’ll receive updates in the product and via release notes.
 

🛠 **Note**: Enabling experimental features is a great way to influence Torque’s roadmap and help improve future releases.

info 🔒  Experimental Features are optionally available for **Enterprise plans only**.



  

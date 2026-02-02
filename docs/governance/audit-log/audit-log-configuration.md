---
sidebar_position: 3
title: Audit Log Configuration
---

## Prerequisites
* Working Elastic Stack server with internet access

## Configuration
1. Navigate to __Configuration > Audit Log__, and click __Add Audit Target__.
2. Select one of the options:
   - __Torque Audit__: Forward logs to <ProductName />, and retain for 18 months.
   - __ElasticSearch__: With built-in Elastic Stack integration, you can forward audit data for real-time analysis and reporting.
3. When selecting ElasticSearch, please fill in the details: 
   > ![Locale Dropdown](/img/audit_logs_wizard.png)
   * __Destination URL__ of the elastic server
   * __Username/Password__ of the elastic Stack admin
   * __Certificate__: You can optionally configure SSL connection by specifying the http ca __Certificate__.

4. Click __Send a test event__, and click __Save__.
5. In Kibana, go to __Management >  Stack Management > Index Management__ and make sure you see the __quali__ index.
> ![Locale Dropdown](/img/quali-index.png)
6. Go to __Management >  Stack Management > Index Patterns__ and create a "quali" index pattern.
> ![Locale Dropdown](/img/quali-index-pattern.png)
  
  Congratulations! Audit Log is configured and collecting <ProductName /> events.
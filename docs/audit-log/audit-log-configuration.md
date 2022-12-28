---
sidebar_position: 3
title: Audit Log Configuration
---

## Prerequisites
* Working Elastic Stack server with internet access

## Configuration
1. Go to __Administration > Audit Log__, and click __Add audit target__.
2. Select __elasticsearch__ and fill in the details. 
   > ![Locale Dropdown](/img/add-audit-target.png)
   * __Destination URL__ of the elastic server
   * __Username/Password__ of the elastic Stack admin
   * __Certificate__: You can optionally configure SSL connection by specifying the http ca __Certificate__.

3. Click __Send a test event__, and click __Save__.
4. In Kibana, go to __Management >  Stack Management > Index Management__ and make sure you see the __quali__ index.
> ![Locale Dropdown](/img/quali-index.png)
5. Go to __Management >  Stack Management > Index Patterns__ and create a "quali" index pattern.
> ![Locale Dropdown](/img/quali-index-pattern.png)
  
  Congratulations! Audit Log is configured and collecting Torque events.
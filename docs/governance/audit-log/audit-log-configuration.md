---
sidebar_position: 3
title: Audit Log Configuration
---

## Prerequisites
* An active, internet-connected Elastic Stack or OpenSearch server

## Configuration
1. Navigate to **Configuration > Audit Log**, and click **Add Audit Target**.
2. Select one of the following target options:
   - **Torque Audit**: Forwards logs directly to Torque with a retention period of 18 months
   - **ElasticSearch / OpenSearch**: Uses built-in integrations to forward audit data for real-time analysis, visualization, and reporting
3. If selecting ElasticSearch or OpenSearch, configure the following parameters: 
   > ![Locale Dropdown](/img/audit_logs_wizard.png)
   * **Destination URL**: The endpoint URL of your ElasticSearch or OpenSearch cluster
   * **Username/Password**: Administrative credentials for cluster authentication
   * **Certificate**: (Optional) Provide the HTTP CA certificate to secure the connection via SSL/TLS

4. Click **Send a test event** to verify connectivity, then click **Save**.
5. Log in to Kibana or OpenSearch Dashboards, navigate to **Management > Stack Management > Index Management**, and verify that the **quali** index is present.
> ![Locale Dropdown](/img/quali-index.png)
6. Proceed to **Index Patterns** (or **Data Views** / **Index Management** depending on your platform version) and create a `quali` index pattern to expose the data.
> ![Locale Dropdown](/img/quali-index-pattern.png)
  
Audit log configuration is complete, and Torque events are now being successfully ingested.

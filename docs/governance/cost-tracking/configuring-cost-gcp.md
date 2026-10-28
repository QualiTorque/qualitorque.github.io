---
sidebar_position: 13
title: Configuring Cost for GCP
---

## Prerequisites

1. Ensure you have a GCP project with billing enabled.
2. Create a BigQuery dataset and table to store detailed usage cost data.
3. Create a service account with the necessary permissions to access the BigQuery dataset and table. The service account must have the following roles:
   * `BigQuery Data Viewer`
   * `BigQuery Job User`
   * `Billing Account Viewer`
4. Download the service account key in JSON format. This will be used in Torque.

## Configuration Steps

### Step 1: Set up BigQuery for Cost Data

1. In your GCP Console, navigate to **BigQuery**.
2. Create a dataset to store cost data:
   1. Click **Create Dataset**.
   2. Enter a **Dataset ID** (e.g., `cost_data`).
   3. Set the **Data location** and other settings as needed.
   4. Click **Create Dataset**.
3. Create a table for detailed usage cost data:
   1. Select the dataset you just created.
   2. Click **Create Table**.
   3. Set the **Table ID** (e.g., `detailed_usage_cost`).
   4. Define the schema for the table based on your cost data requirements.
   5. Click **Create Table**.

### Step 2: Create a Service Account

1. In your GCP Console, navigate to **IAM & Admin > Service Accounts**.
2. Click **Create Service Account**.
3. Enter a **Service Account Name** (e.g., `torque-cost-collector`).
4. Assign the following roles to the service account:
   * `BigQuery Data Viewer`
   * `BigQuery Job User`
   * `Billing Account Viewer`
5. Click **Done**.
6. Download the service account key in JSON format:
   1. Select the service account you just created.
   2. Click **Keys > Add Key > Create New Key**.
   3. Select **JSON** and click **Create**.
   4. Save the JSON file securely.

### Step 3: Configure Torque

1. In Torque, expand the **Admin** section at the bottom of the left sidebar and click **Cost Configurations** (requires the account admin role).
2. Click **Add Cloud**.
3. In the **Connect a Cloud** dialog, enter a **Name** for the cloud account and select **GCP**.
4. Under **Configure & Paste**, specify the following details:
   * **Project Id**: The GCP project ID where the BigQuery dataset resides.
   * **Dataset**: The name of the BigQuery dataset (e.g., `cost_data`).
   * **Table Name**: The name of the BigQuery table with the detailed usage cost data (e.g., `detailed_usage_cost`).
   * **Location**: The location of the BigQuery dataset.
   * **Service Account Key Json**: Paste the contents of the JSON key file downloaded in Step 2.
5. Click **Save**.
6. Click the cost collection target's **⋮** (3-dot) menu and select **Validate** to ensure the configuration works.

import pic1 from '/img/gcp-cost-target.png';

> <img src={pic1} alt="gcp-cost-target" style={{width: 800}} />


### Step 4: Enable the Cost Collection Target

1. Expand the **Admin** section at the bottom of the left sidebar and click **Cost Configurations**.
2. Click the desired cost collection target's **Enabled** toggle.

## Troubleshooting

What can be done if you don't see cost in Torque's cost dashboard?

1. Ensure that cost data is being exported to the BigQuery table. Check the table in the GCP Console to verify data is present.
2. Validate the service account permissions:
   * Ensure the service account has access to the BigQuery dataset and table.
   * Verify the service account has the `Billing Account Viewer` role.
3. Test your credentials in Torque:
   * Expand the **Admin** section of the left sidebar, click **Cost Configurations**, open the cloud account's **⋮** (3-dot) menu, and select **Validate**.
4. If issues persist, review the configuration steps above and correct any errors.

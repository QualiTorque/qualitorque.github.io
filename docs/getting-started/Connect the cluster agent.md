---
sidebar_position: 8
title: Connect the Cluster's Agent to Torque
---

**To connect the cluster's agent to Torque:**

1. Click **Copy to clipboard** and paste the YAML code block in your preferred text editor.
2. Save it as a YAML file.
3. Open a terminal such as PowerShell inside your cluster (where the file is located) and run the following command:

    ```
    kubectl apply -f <file-name>
    ```

    For example: 

    ```
    kubectl apply -f "C:\Temp\agent.yaml"
    ```

3. Return to Torque and click the **Verify Connectivity** to make sure the agent was installed correctly and can connect to Torque.
4. Once verified, click **Finish** in the window that pops up.
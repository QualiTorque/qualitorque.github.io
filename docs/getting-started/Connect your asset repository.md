---
sidebar_position: 5
title: Connect Your Asset Repository
---

Torque needs access to your relevant git repositories to read your Terraform modules or Helm charts code.
Torque supports 3 version control systems: GitHub, GitLab and BitBucket.

Once a repository is connected, Torque will automatically discover the assets in it (Terraform modules and Helm charts) and will ask you to choose the assets to be used for the blueprints. After you choose the relevant assets, Torque will automatically generate initial blueprints from your assets.

:::tip Note:

The Torque application requests full access to your repositories however Torque application is **read only** and will never write to your repositories.

:::

**To connect your repository:**

1. Go to the **Settings** page in your space.

  > ![Locale Dropdown](/img/settings.png)
  
2. Click the **Repositories** tab.

  > ![Locale Dropdown](/img/repository.png)

3. Click **Add a Repository** and follow the instructions.
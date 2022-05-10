---
sidebar_position: 5
---

# Connect your asset repository

Torque needs access to your relevant git repositories, in order to read your Terraform modules or Helm charts code.
Torque supports 3 version control systems: GitHub, GitLab and BitBucket.

Once a repository is connected, Torque will automatically discover the assets in it (Terraform modules and helm charts) and will ask you to choose the assets which will be used for the blueprints. After you chose the relevant assets, Torque will automatically generate initial blueprints from your assets.

:::tip Note:

The Torque application requests full access to your repositories however Torque application is **read only** and will never write to your repositories.

:::

To connect your repository, go to the settings page on your space, and then click the reposotories tab. Click on "Add a repository".

![alt text][space-settings]

[space-settings]: https://github.com/QualiTorque/Torque-Docs/static/img/settings.png "Space-Settings"

![alt text][space-repos]

[space-repos]: https://github.com/QualiTorque/Torque-Docs/static/img/repository.png "Space-Repos"

![alt text][add-repo]

[add-repo]: https://github.com/QualiTorque/Torque-Docs/static/img/add-repo.png "Add-Repo"

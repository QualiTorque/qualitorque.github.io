// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Torque',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'QualiTorque', // Usually your GitHub org/user name.
  projectName: 'torque-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  plugins: [
    // ...
    require.resolve("@cmfcmf/docusaurus-search-local"),
    require.resolve("docusaurus-plugin-sass")
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/QualiTorque/torque-docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/sidebar.scss'),
            require.resolve('./src/css/pagination-nav.scss'),
            require.resolve('./src/css/breadcrumbs.scss'),
            require.resolve('./src/css/footer.scss'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          src: 'img/logo.svg',
          srcDark: "img/Q_Torque_Logo_white_2c.png"
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Documentation',
          // },
          {
            href: 'https://github.com/QualiTorque/torque-docs/discussions/categories/announcements',
            className: 'header-announcments-link',
            position: 'right',
          },
          {
            href: 'https://github.com/QualiTorque/torque-docs',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Quali Website',
                href: 'https://www.quali.com/',
              },
              {
                label: 'Careers',
                href: 'https://www.quali.com/careers/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Community',
                href: 'https://github.com/QualiTorque/torque-docs/discussions',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/qualisystems',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Quali blog',
                href: 'https://www.quali.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ]
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

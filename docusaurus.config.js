// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Torque',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.qtorque.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'QualiTorque', // Usually your GitHub org/user name.
  projectName: 'torque-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  scripts: [
    // One Trust Cookie policy
    {
      src: 'https://cdn.cookielaw.org/consent/47d0fdb5-1ced-4a6a-a893-847e68cce066/OtAutoBlock.js'
    },
    {
      src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
      charset: 'UTF-8',
      "data-domain-script": "47d0fdb5-1ced-4a6a-a893-847e68cce066"
    },
    "http://docs.qtorque.io/one-trust.js"
  ],
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
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/sidebar.scss'),
            require.resolve('./src/css/pagination-nav.scss'),
            require.resolve('./src/css/breadcrumbs.scss'),
            require.resolve('./src/css/footer.scss'),
            require.resolve('./src/css/dark-mode.scss'),
            require.resolve('./src/css/topbar.scss'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [
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
                href: 'https://github.com/QualiTorque/torque-docs',
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
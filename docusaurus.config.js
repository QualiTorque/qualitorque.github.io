// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Torque',
  tagline: 'Torque Online Help',
  url: 'https://docs.qtorque.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'QualiTorque', // Usually your GitHub org/user name.
  projectName: 'torque-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  future: {
    v4: true,
    experimental_faster: true,
  },
  // scripts: [
  //   // One Trust Cookie policy
  //   {
  //     src: 'https://cdn.cookielaw.org/consent/31859194-4ed7-4958-bfc5-08046e0f6ab7/OtAutoBlock.js',
  //     type: "text/javascript",
  //   },
  //   {
  //     src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
  //     charset: 'UTF-8',
  //     type: "text/javascript",
  //     "data-domain-script": "31859194-4ed7-4958-bfc5-08046e0f6ab7"
  //   },
  //   {  src: 'http://docs.qtorque.io/one-trust.js',
  //     type: "text/javascript"
  //   }
  // ],
  plugins: [
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
            require.resolve('./src/css/footer.scss'),
            require.resolve('./src/css/dark-mode.scss'),            
          ],
        },
        sitemap: {
          lastmod: 'date',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/2023.3/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 80,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Torque',
          src: '/img/logo.png',
          srcDark: '/img/logo-dm.png',
        },
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'powershell'],
      },
    }),
};

module.exports = config;
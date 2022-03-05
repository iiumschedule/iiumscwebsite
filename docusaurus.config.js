// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IIUM Schedule Generator',
  tagline: 'Generate your schedule easy peasy',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iqfareez', // Usually your GitHub org/user name.
  projectName: 'iium_schedule', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IIUM Schedule',
        logo: {
          alt: 'IIUM Schedule Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'extract/imaalum',
            position: 'left',
            label: 'Guides',
          },
          { to: '/downloads', label: 'Downloads', position: 'left' },
          {
            href: 'https://github.com/iqfareez/iium_schedule',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/docs/extract/imaalum',
              },
            ],
          },
          {
            title: 'Legalese',
            items: [
              {
                label: 'Privacy Policy',
                to: 'privacy-policy',
              },
              {
                label: 'Terms and Conditions',
                to: 'terms',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'http://github.com/iqfareez',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/iqfareez',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Devlog',
                href: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTAxOTkzNjUzNDk0NDQ3',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 Muhammad Fareez`,
      },
      metadata: [{
        property: "og:image", content: "https://iiumschedule.vercel.app/img/meta-banner.png"
      }],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

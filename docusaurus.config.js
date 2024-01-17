// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IIUM Schedule Generator',
  tagline: 'Generate your schedule easy peasy',
  url: 'https://iiumschedule.vercel.app/',
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
        blog: {
          routeBasePath: '/changelog',
          blogTitle: 'Release Notes',
          blogDescription: 'IIUM Schedule stable version release notes',
          blogSidebarTitle: 'Release notes',
          blogSidebarCount: 'ALL',
          path: 'changelog',
          postsPerPage: 4,
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/iqfareez/iiumscwebsite/tree/master/changelog',
        },
        // blog: false,
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
            docId: 'extract/index',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/downloads', label: 'Downloads', position: 'left',
          },
          {
            href: 'https://github.com/iiumschedule/iium_schedule',
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
                to: '/docs/extract',
              },
              {
                label: 'Downloads',
                // to: '/downloads/stable',
                to: '/downloads',
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
            title: 'More',
            items: [
              {
                label: 'Send feedback',
                to: 'feedback'
              },
              {
                label: 'Release Notes',
                to: '/changelog',
                // href: 'https://github.com/iqfareez/iium_schedule/releases'
              },
              {
                label: 'Devlog',
                href: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTAxOTkzNjUzNDk0NDQ3',
              },
              {
                label: 'Branding',
                to: '/branding',
              },
            ],
          },
        ],
        // thanks https://github.com/facebook/docusaurus/discussions/6628
        copyright: '<div>Copyright © 2023 <a style="color: #bbe3ff" href="https://iqfareez.com">Muhammad Fareez</a></div>',
      },
      metadata: [{
        property: "og:image", content: "https://iiumschedule.vercel.app/img/meta-banner.png"
      }],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'dart'],
      },
    }),
};

module.exports = config;

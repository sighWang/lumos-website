// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CKB lumos",
  tagline: "CKB lumos website",
  url: "https://github.com/nervosnetwork/lumos",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nervosnetwork", // Usually your GitHub org/user name.
  projectName: "ckb lumos", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CKB lumos",
        logo: {
          alt: "CKB lumo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            position: "left",
            label: "Tutorial",
            href: "https://cryptape.github.io/lumos-doc/docs/introduction/intro/",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          { to: "/tools", label: "Tools", position: "left" },
          {
            href: "https://nervosnetwork.github.io/lumos/globals.html",
            label: "API",
            position: "left",
          },
          {
            href: "https://github.com/nervosnetwork/lumos",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                href: "https://cryptape.github.io/lumos-doc/docs/introduction/intro/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/NervosNetwork",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  Nervos Foundation. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

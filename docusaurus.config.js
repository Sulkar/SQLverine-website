/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SQLverine',
  tagline: 'Datenbanken ganz einfach!',
  url: 'https://sqlverine.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'sulkar', // Usually your GitHub org/user name.
  projectName: 'SQLverine-website', // Usually your repo name.
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },
  themeConfig: {

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },

    navbar: {
      title: 'SQLverine',
      logo: {
        alt: 'My Site Logo',
        src: 'img/SQLverine.svg',
      },
      items: [
        { to: 'https://sulkar.github.io/SQLverine/', label: 'Editor', position: 'left' },
        { to: '/docs/sqlverine/select', label: 'SQLverine Docs', position: 'left' },

        {
          href: 'https://github.com/Sulkar/SQLverine-website',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },

          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SQLverine - built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

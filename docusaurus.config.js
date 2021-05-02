/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SQLverine',
  tagline: 'Datenbanken ganz einfach!',
  url: 'https://tools.unsere-schule.org/',
  baseUrl: '/docusaurus/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sulkar', // Usually your GitHub org/user name.
  projectName: 'SQLverine-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SQLverine',
      logo: {
        alt: 'My Site Logo',
        src: 'img/SQLverine.svg',
      },
      items: [
		{to: 'https://sulkar.github.io/SQLverine/', label: 'Editor', position: 'left'},
        {to: '/docs/sqlverine/hello', label: 'SQLverine Docs', position: 'left'},
        
        {
          href: 'https://github.com/facebook/docusaurus',
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

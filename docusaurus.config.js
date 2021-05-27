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
                { to: 'https://editor.sqlverine.org/', label: 'Editor', position: 'left' },
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
            links: [{
                    title: 'Dokumentation',
                    items: [{
                        label: 'Tutorial',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: 'Weiteres',
                    items: [{
                            label: 'Twitter',
                            href: 'https://twitter.com/sqlverine',
                        },
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'Github',
                            to: 'https://github.com/Sulkar/SQLverine',
                        },
                    ],
                },
                {
                    title: 'Rechtliches',
                    items: [{
                            label: 'Impressum',
                            to: '/impressum',
                        },
                        {
                            label: 'Datenschutz',
                            to: '/datenschutz',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} SQLverine`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
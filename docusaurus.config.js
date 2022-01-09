
const path = require('path');

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
        locales: ['de'],
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
                { to: 'https://editor.sqlverine.org/', label: 'Editor', position: 'left', target: '_self' },
                { to: 'https://author.sqlverine.org/', label: 'Autorenwerkzeug', position: 'left', target: '_self' },
                { to: '/docs/intro', label: 'Dokumentation', position: 'left' },
                { to: '/info', label: 'Info', position: 'right' },
                { to: '/blog', label: 'Blog', position: 'right' },
                { to: '/service', label: 'Service', position: 'right' },

                /*{
                    type: 'localeDropdown',
                    position: 'right',
                },*/
            ],
           

        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'SQLverine',
                    items: [{
                        label: 'Datenbanken',
                        to: '/databases',
                    },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Twitter',
                            href: 'https://twitter.com/sqlverine',
                        },
                        {
                            label: 'YouTube',
                            to: 'https://www.youtube.com/channel/UCfF5agqoTyG87g6GI9j53tw',
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
                        {
                            label: 'Kontakt',
                            to: '/ueberuns',
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
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.                    
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        'plugin-image-zoom',
      ],
};
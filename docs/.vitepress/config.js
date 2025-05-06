import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'cflib',
    description: 'A tiny inconspicuous javascript library for Cloudflow',
    themeConfig: {
        search: {
            provider: 'local',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: 'Home', link: '/introduction' }],

        sidebar: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Installation', link: '/installation' },
            { text: 'Usage', link: '/usage' },
            {
                text: 'Documentation',
                collapsed: true,
                items: [
                    { text: 'Colors', link: '/documentation/colors' },
                    { text: 'Environment', link: '/documentation/environment' },
                    { text: 'Metadata', link: '/documentation/metadata' },
                    { text: 'RIP', link: '/documentation/rip' },
                    { text: 'System', link: '/documentation/system' },
                    { text: 'User', link: '/documentation/user' },
                    { text: 'Utilities', link: '/documentation/utilities' },
                ],
            },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/jcgerhard/cflib' }],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present Jan C. Gerhard',
        },
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: 'Europe/Berlin', // Use appropriate time zone
                timeZoneName: 'short', // Adds time zone abbreviation
            },
        },
    },
});

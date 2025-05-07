import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'cflib',
    description: 'A tiny inconspicuous javascript library for Cloudflow',
    themeConfig: {
        search: {
            provider: 'local',
        },
        nav: [{ text: 'Home', link: '/introduction' }],
        socialLinks: [{ icon: 'github', link: 'https://github.com/jcgerhard/cflib' }],
        sidebar: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Installation', link: '/installation' },
            { text: 'Usage', link: '/usage' },
            {
                text: 'Documentation',
                collapsed: true,
                items: [
                    { text: 'Colors', link: '/pages/colors' },
                    { text: 'Environment', link: '/pages/environment' },
                    { text: 'Metadata', link: '/pages/metadata' },
                    { text: 'RIP', link: '/pages/rip' },
                    { text: 'System', link: '/pages/system' },
                    { text: 'User', link: '/pages/user' },
                    { text: 'Utilities', link: '/pages/utilities' },
                ],
            },
        ],
        outline: {
            label: 'Content',
            level: [2, 3],
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
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present Jan C. Gerhard',
        },
    },
});

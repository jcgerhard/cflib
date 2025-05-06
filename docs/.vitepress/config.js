import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'cflib',
    description: 'A tiny inconspicuous javascript library for Cloudflow',
    themeConfig: {
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium',
            },
        },
        search: {
            provider: 'local',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: 'Home', link: '/introduction' }],

        sidebar: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Quick Start', link: '/quickstart' },
            { text: 'Usage', link: '/usage' },
            {
                text: 'Documentation',
                collapsed: true,
                items: [{ text: 'Colors', link: '/documentation/colors' }],
            },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/jcgerhard/cflib' }],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present Jan C. Gerhard',
        },
    },
});

import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'cflib',
    description: 'A tiny inconspicuous javascript library for Cloudflow',
    // Base URL for GitHub Pages
    base: '/cflib/',
    // Set output directory to /docs instead of the default dist folder
    outDir: resolve(__dirname, '../../docs'),
    // Add srcDir to explicitly tell VitePress where content is located
    srcDir: resolve(__dirname, '..'),
    markdown: {
        lineNumbers: true,
    },
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
                //collapsed: false,
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
            level: 2,
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
                timeZone: 'Europe/Berlin',
                timeZoneName: 'short',
            },
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Made with ♥️ by Jan C. Gerhard - ${new Date().getFullYear()} `,
        },
    },
});

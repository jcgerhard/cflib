import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
        coverage: {
            provider: 'v8',
            directory: 'coverage',
            exclude: ['node_modules/**', 'dist/**'],
        },
        include: ['**/*.{test,spec}.js'],
    },
});

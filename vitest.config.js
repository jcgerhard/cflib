import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
        coverage: {
            provider: 'v8',
            directory: 'coverage',
            include: ['src/**/*'],
        },
        include: ['tests/**/*.test.js'],
    },
});

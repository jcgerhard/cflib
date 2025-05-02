import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
        coverage: {
            provider: 'v8',
            directory: 'coverage',
            exclude: ['node_modules/**', 'dist/**', 'tests/**', '*.config.js', '.eslintrc.js'],
            include: ['src/**/*'],
        },
        include: ['tests/**/*.test.js'],
    },
});

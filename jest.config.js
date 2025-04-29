module.exports = {
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
    testMatch: ['**/*.test.js', '**/*.spec.js'],
    verbose: true,
};

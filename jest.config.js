module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    // Aliasの設定
    '^@/(.+)': '<rootDir>/src/$1',
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  roots: ['.'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs',
        },
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/'],
}

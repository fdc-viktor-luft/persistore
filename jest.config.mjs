export default {
  collectCoverageFrom: ["src/**/*.ts"],
  testMatch: ["<rootDir>/test/**/*.ts"],
  coverageThreshold: { global: { statements: 100, branches: 100, functions: 100, lines: 100 } },
  coverageDirectory: "<rootDir>/coverage",
  testEnvironment: 'jsdom',
  transform: { "\\.(js|jsx|ts|tsx)$": "@sucrase/jest-plugin" },
};

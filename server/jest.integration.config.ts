const config = {
  // globalSetup: './test/global-setup.js',
  // globalTeardown: './test/global-teardown.js',
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  testTimeout: 3000,
  reporters: ["default", "jest-junit"]
};

export default config;
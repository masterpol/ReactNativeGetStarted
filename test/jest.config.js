const path = require('path');

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  rootDir: path.resolve(__dirname, '../'),
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/test/testSetup.js'],
  // snapshotSerializers: ['@emotion/jest/serializer'],
  coverageDirectory: '<rootDir>/test/coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation)',

  ],
  modulePathIgnorePatterns: [],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        "pageTitle": "Test Report"
      }
    ]
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
    '!src/**/*.stories.js',
    '!src/**/index.js',
    '!src/constants/**',
    '!e2e/**/*.js',
  ],
}

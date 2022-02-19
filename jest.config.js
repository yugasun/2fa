const isDebug = process.env.DEBUG === 'true';

const config = {
  verbose: true,
  silent: !isDebug,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testTimeout: 60000,
  testEnvironment: 'node',
  testRegex: '/__tests__/.*\\.(test|spec)\\.(js|ts)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

module.exports = config;

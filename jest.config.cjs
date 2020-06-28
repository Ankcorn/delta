// const dotenv = require('dotenv');
// dotenv.config({ path: './.env.test' });

module.exports = {
  testEnvironment: "node",
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/**/*.test.ts']
}

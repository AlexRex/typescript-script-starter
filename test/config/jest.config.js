module.exports = {
  rootDir: '../..',
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [
    '<rootDir>/test/**/*.spec.ts',
    '<rootDir>/test/*.spec.ts',
    '<rootDir>/test/**/*.spec.js',
    '<rootDir>/test/*.spec.js',
    '<rootDir>/test/**/*.test.ts',
    '<rootDir>/test/*.test.ts',
    '<rootDir>/test/**/*.test.js',
    '<rootDir>/test/*.test.js'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/test/config'],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}'
  ],
  coverageDirectory: '<rootDir>/test/results/coverage',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/test/config/tsconfig.test.json'
    }
  }
}

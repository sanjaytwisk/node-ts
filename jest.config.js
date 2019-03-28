const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$'

module.exports = {
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: false,
  preset: 'ts-jest',
}

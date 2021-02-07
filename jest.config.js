module.exports = {
  collectCoverageFrom: ['**/*.js', '!**/node_modules/**'],
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/dist/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileTransformer.js',
  },
  // transformIgnorePatterns: [
  //   '/node_modules/',
  //   '^.+\\.module\\.(css|sass|scss)$',
  // ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'config/jest', 'utils', __dirname],
};

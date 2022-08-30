const scanner = require('sonarqube-scanner')
// const sonar = require()

scanner(
  {
    serverUrl: 'http://13.38.217.8:9000',
    token: 'squ_d8cef8341e645c93c70086b772ee013f3d69551a',
    options: {
      'sonar.sources': './src',
      'sonar.exclusions': '**/*.test.tsx',
      'sonar.tests': './src',
      'sonar.test.inclusions': '**/*.test.tsx,**/*.test.ts',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'test-report.xml',
      "sonar.eslint.reportPaths":"eslint-report.json"
    },
  },
  () => process.exit(),
)

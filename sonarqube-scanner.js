const scanner = require('sonarqube-scanner')
// const sonar = require()

scanner(
  {
    serverUrl: 'http://13.38.217.8:9000',
    token: 'squ_e92d7f3d2c09335a4926e6924773b8d37b9fd5d9',
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

const scanner = require('sonarqube-scanner')
// const sonar = require()

scanner(
  {
    serverUrl: 'http://13.38.217.8:9000',
    token: 'sqp_93e7a6047ad5fbf66d38867125a5ddead1e47dec',
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

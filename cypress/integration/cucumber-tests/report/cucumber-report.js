const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'cypress/cucumber-report/landmark-google-search.cucumber.json',
    output: 'cypress/cucumber-report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {

        "Parallel": "Scenarios"
    }
};

reporter.generate(options);

import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import GoogleSearchPage from "../pages/google-search-page"

Given(/^I am on the google search page$/, function () {
    GoogleSearchPage.visitHomePage()

});

When(/^I perform a search and filer$/, function (table) {
    const dataTable = table.hashes()
    GoogleSearchPage.searchWithFilter(dataTable[0].searchKeyWord, dataTable[0].filter)

});

Then(/^the result should present link to the Ochresoft website$/, function (resultUrlTable) {
    const dataTable = resultUrlTable.hashes()
    GoogleSearchPage.getResults(dataTable[0].url)
});

Then(/^I should be navigate to the (.*)$/, function (page) {
    GoogleSearchPage.verifyResultPageAfterClick(page)

});


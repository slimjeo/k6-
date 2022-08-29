/// <reference types="cypress" />
const GOOGLE_HOME_PAGE = "https://www.google.co.uk/";
const ACCEPT_TC_BUTTON = '[id="L2AGLb"]';
const SEARCH_TEXT_BOX = '[name="q"]';
const FILTER_TOOL = '[id="hdtb-tls"]';
const FILTER_ANYTIME_TEXT = "Any time";

class GoogleSearchPage {
  static visitHomePage() {
    cy.visit(GOOGLE_HOME_PAGE);
    this.clickOn(ACCEPT_TC_BUTTON);
  }

  static searchWithFilter(searchWord, filter) {
    this.sendKeysWithEnterKey(SEARCH_TEXT_BOX, searchWord);
    this.clickOn(FILTER_TOOL);
    this.clickWithText(FILTER_ANYTIME_TEXT);
    this.clickWithText(filter);
  }

  static getResults(resultUrl) {
    this.clickOnExpectedResultFromResultPages(resultUrl);
  }

  static verifyResultPageAfterClick(page) {
    cy.title().should("eq", page);
  }

  static clickOnExpectedResultFromResultPages(resultUrl) {
    let found = false;
    const expectedResultElement = `[href="${resultUrl}"]`;
    while (found === false) {
      cy.get("body").then((body) => {
        if (body.find(expectedResultElement).length === 0 || body.find(expectedResultElement).length < 0) {
          const currentPageText = this.getElementText("cur");
          const nextPage = Number(currentPageText) + 1;
          cy.get(`:nth-child(${nextPage.toString()})`).click();
        } else {
          cy.get(expectedResultElement, { timeout: 10000 }).click();
          found = true;
        }
      });
    }
  }

  // common actions
  static clickOn(element) {
    cy.get(element, { timeout: 5000 }).click();
  }

  static clickWithText(text) {
    cy.contains(text).click();
  }

  static sendKeysWithEnterKey(element, text) {
    cy.get(element, { timeout: 5000 }).type(text).type("{enter}");
  }

  static getElementText(element) {
    cy.get(element, { timeout: 10000 })
      .invoke("text")
      .then((text) => {
        return text;
      });
  }
}

export default GoogleSearchPage;

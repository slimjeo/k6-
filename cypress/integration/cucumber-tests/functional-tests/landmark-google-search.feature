@ui
Feature:Landmark Google Search

  Scenario: I should see Ochresoft website in Landmark google search
    Given I am on the google search page
    When I perform a search and filer
      | searchKeyWord              | filter     |
      | landmark information group | Past month |
    Then the result should present link to the Ochresoft website
      | url                                                                  |
      | https://www.ochresoft.com/the-british-wills-and-probate-awards-2022/ |
    And I should be navigate to the The British Wills and Probate Awards 2022 - Ochresoft

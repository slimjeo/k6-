@api
Feature: Postman Echo Tests

  Scenario:Post Cake Payload
    Given I have a payload cake json
    When I post the request to postman echo endpoint
    Then the response status should be 200
    And I should be able to sum up the cake price from response body
    And the total price should be 15

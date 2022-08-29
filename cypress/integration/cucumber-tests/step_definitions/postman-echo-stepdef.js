import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import RequestActions from "../xhr-requests/request-actions";

let requestPayload

Given(/^I have a payload (.*) json$/, function (payload) {
    requestPayload = payload
});
When(/^I post the request to postman echo endpoint$/, function () {
    RequestActions.postToPostmanEcho(requestPayload)
});
Then(/^the response status should be (\d+)$/, function (expectedStatusCode) {
    RequestActions.verifyResponseStatusCode(expectedStatusCode)
});
Then(/^I should be able to sum up the cake price from response body$/, function () {
    RequestActions.totalOfTheCakePrice()
});
Then(/^the total price should be (\d+)$/, function (expectedTotal) {
    RequestActions.sumOfCakeTotalPrice(expectedTotal)
});

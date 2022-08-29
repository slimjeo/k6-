/// <reference types="cypress" />
const postmanEchoEndpoint = 'https://postman-echo.com/post'
let cakeTotalPrice;

class RequestActions {

    static postToPostmanEcho(payload) {
        cy.fixture(payload).as('requestPayload');
        cy.get('@requestPayload').then(payloadFixture => {
            cy.request({
                method: 'POST',
                url: postmanEchoEndpoint,
                body: payloadFixture,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                console.log(resp.body)
                cy.log(resp.body)
                Cypress.env('statusCode', resp.status)
                Cypress.env('priceOne', resp.body.data.Cakes[0].Price)
                Cypress.env('priceTwo', resp.body.data.Cakes[1].Price)
            })
        })
    }

    static verifyResponseStatusCode(expectedStatusCode) {
        expect(Cypress.env('statusCode')).to.eq(expectedStatusCode)
    }

    static totalOfTheCakePrice() {
        console.log(Cypress.env('priceOne'))
        console.log(Cypress.env('priceTwo'))
        const priceOne = Cypress.env('priceOne')
        const priceTwo = Cypress.env('priceTwo')
        console.log(priceOne + priceTwo)
        cakeTotalPrice = priceOne + priceTwo
        cy.log('The total price of all the cakes returned ' + cakeTotalPrice)
    }

    static sumOfCakeTotalPrice(expectedTotal) {
        expect(cakeTotalPrice).to.eq(expectedTotal)
    }
}


export default RequestActions;

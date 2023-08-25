/// <reference types="cypress"/>

// Feature
describe('Cadastrar dispositivo', () => {

    // Cenários (1)
    it('Cadastrar dispositivo', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Lenovo Ideapad 330",
                "data": {
                    "year": 2018,
                    "price": 2299.90,
                    "CPU model": "Intel Core i5",
                    "Hard disk size": "1 TB"
                }
            },
            failOnStatusCode: false,
        }).then((retorno) => {
            expect(retorno.status).equal(200)
        })
    })

})

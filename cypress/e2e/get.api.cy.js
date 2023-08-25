/// <reference types="cypress"/>

// Feature
describe('Buscar dispositivos', () => {

    // Cenários (1)
   it('Buscar dispositivo específico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/7',
            failOnStatusCode: false,
        }).then((retorno) => {
            expect(retorno.status).equal(200),
            expect(retorno.body.name).equal('Apple MacBook Pro 16')
            expect(retorno.body.data).not.empty
            expect(retorno.body.data.year).not.string
            expect(retorno.body.data.year).equal(2019)
            expect(retorno.body.data.price).not.string
            expect(retorno.body.data.price).equal(1849.99)
            expect(retorno.body.data['CPU model']).not.empty
            expect(retorno.body.data['Hard disk size']).not.empty

        })
    })

    // Cenários (2)
   it('Buscar dispositivo inexistente', () => {
    cy.request({
        method: 'GET',
        url: 'https://api.restful-api.dev/objects/123456789',
        failOnStatusCode: false,
    }).then((retorno) => {
        expect(retorno.status).equal(404)

    })
})

})

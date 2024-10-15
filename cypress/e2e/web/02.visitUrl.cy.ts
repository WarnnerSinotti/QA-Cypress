describe('02-Teste Validando se BASE_URL for vazia, acesse o link descrito', () => {
    const url = Cypress.env('BASE_URL') ? Cypress.env('BASE_URL') : 'https://the-internet.herokuapp.com/';

    it('Validando se BASE_URL for vazia no env, acesse o link descrito na constante', () => {
        cy.allureSeverity('blocker');

        cy.visit(url);
        cy.get('.heading').should('contain.text', 'Welcome to the-internet');
    });
});

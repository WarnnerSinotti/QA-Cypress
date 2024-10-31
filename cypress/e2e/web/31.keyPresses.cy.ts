import { assertionAlert } from 'cypress/assertions/assertionsGlobal';

describe('Teste de Teclado', () => {
    beforeEach(() => {
        cy.visit('/key_presses?');
        cy.url().should('include', '/key_presses?');
    });

    it('Validando Teclado', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'Key Presses');

        cy.get('[id="target"]').should('be.visible').type('Cypress');

        assertionAlert('S');
    });
});

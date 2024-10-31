import { assertionAlert } from 'cypress/assertions/assertionsGlobal';

describe('Teste de Alerta', () => {
    const text: string = 'Test Cypress';

    beforeEach(() => {
        cy.visit('/javascript_alerts');
        cy.url().should('include', '/javascript_alerts');
    });

    it('Validando JS Alert', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'JavaScript Alerts');

        cy.get('[onclick="jsAlert()"]').should('be.visible').click();
        assertionAlert('You successfully clicked an alert');
    });

    it('Validando JS Confirm', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'JavaScript Alerts');

        cy.get('[onclick="jsConfirm()"]').should('be.visible').click();
        assertionAlert('You clicked: Ok');
    });

    it('Validando JS Prompt', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'JavaScript Alerts');
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(text);
        });
        cy.get('[onclick="jsPrompt()"]').should('be.visible').click();

        assertionAlert(text);
    });
});

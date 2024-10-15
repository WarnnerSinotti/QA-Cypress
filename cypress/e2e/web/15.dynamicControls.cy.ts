import dadosFake from 'cypress/utils/dadosFake';

describe('15-Teste validando texto com Dynamic Controls', () => {
    const name: string = dadosFake.firstName;

    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(13) > a').should('contain.text', 'Dynamic Controls').click();
    });

    it('Validando Textos em Dynamic Controls', () => {
        cy.allureSeverity('normal');

        cy.get('h4').should('contain.text', 'Dynamic Controls');
        cy.get('.example > :nth-child(2)').should(
            'include.text',
            'This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.'
        );
        cy.get('.example > :nth-child(3)').should('include.text', 'Remove/add');
        cy.get('.example > :nth-child(8)').should('include.text', 'Enable/disable');
    });

    it('Removendo checkbox em Dynamic Controls', () => {
        cy.allureSeverity('normal');

        cy.get('h4').should('contain.text', 'Dynamic Controls');

        cy.get('#checkbox > input').check();
        cy.get('#checkbox-example > button').contains('Remove').click();
        cy.get('#checkbox > input').should('not.exist');
        cy.get('#checkbox-example > button').should('contain.text', 'Add');
    });

    it('Habilitando input text em Dynamic Controls', () => {
        cy.allureSeverity('normal');

        cy.get('h4').should('contain.text', 'Dynamic Controls');

        cy.get('#input-example > input').should('be.disabled');
        cy.get('#input-example > button').contains('Enable').click();
        cy.get('#input-example > input').should('be.enabled').type(name);
        cy.get('#message').should('contain.text', `It's enabled!`);
    });
});

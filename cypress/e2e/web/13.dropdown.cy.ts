describe('13-Teste validando Dropdown', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(11) > a').should('contain.text', 'Dropdown').click();
    });

    it('Validando os Dropdown', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'Dropdown');

        cy.get('#dropdown').select(1);
        cy.get('#dropdown').should('contain.text', 'Option 1');
        cy.get('#dropdown').select(2);
        cy.get('#dropdown').should('contain.text', 'Option 2');
    });
});

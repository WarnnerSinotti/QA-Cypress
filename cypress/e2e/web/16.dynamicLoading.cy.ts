describe('16-Teste validando Dynamic Loading Controls', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('BASE_URL'));
        cy.get('ul > :nth-child(14) > a').should('contain.text', 'Dynamic Loading').click();
        cy.get('h3').should('contain.text', 'Dynamically Loaded Page Elements');
    });

    it('Validando Dynamically Loaded Page Elements', () => {
        cy.contains('Element on page that is hidden').should('be.exist').click();
        cy.get('button').should('be.visible').click();
        cy.get('#loading').should('be.visible');
        cy.get('#finish > h4').should('be.visible').should('include.text', 'Hello World!');
    });

    it('Validando Textos em Dynamic Loading Controls', () => {
        cy.contains('Element rendered after the fact').should('be.visible').click();
        cy.get('button').should('be.visible').click();
        cy.get('#loading').should('be.visible');
        cy.get('#finish > h4').should('be.visible').should('include.text', 'Hello World!');
    });
});

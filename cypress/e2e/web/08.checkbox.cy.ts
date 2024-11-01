describe('08-Teste validando checkbox', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(6) > a').should('contain.text', 'Checkboxes').click();
    });

    it('Validando os checkbox', () => {
        cy.allureSeverity('normal');

        cy.get('h3').should('contain.text', 'Checkboxes');
        cy.get('#checkboxes > :nth-child(1)').should('not.be.checked').click();
        cy.get('#checkboxes > :nth-child(3)').should('be.checked').click();

        cy.get('[type="checkbox"]').eq(0).check();
        cy.get('[type="checkbox"]').eq(1).check();
    });
});

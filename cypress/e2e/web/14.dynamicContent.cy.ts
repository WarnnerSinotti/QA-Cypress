describe('14-Teste validando texto com Dynamic Content', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(12) > a').should('contain.text', 'Dynamic Content').click();
    });

    it('Validando texto com Dynamic Content', () => {
        cy.allureSeverity('normal');

        cy.get('h3').should('contain.text', 'Dynamic Content');

        cy.get('img').and('have.prop', 'naturalWidth').should('be.greaterThan', 0);

        cy.get('#content > :nth-child(7) > .large-10')
            .invoke('text')
            .then((text) => {
                const value1 = text;
                cy.get(':nth-child(3) > a').click();
                cy.get('#content > :nth-child(7) > .large-10')
                    .invoke('text')
                    .then((text) => {
                        const value2 = text;
                        expect(value1).not.be.eq(value2);
                    });
            });
    });
});

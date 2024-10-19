describe('Teste de Geolocalização', () => {
    beforeEach(() => {
        cy.visit('/hovers');
        cy.url().should('include', 'hovers');
    });

    it('Validando Houver', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'Hovers');

        for (let index = 0; index < 3; index++) {
            const userCount = 1 + index;
            cy.get('.figure').eq(index).realHover().contains(`name: user${userCount}`);
        }
    });

    it('Acessando profile com Houver', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'Hovers');

        for (let index = 0; index < 3; index++) {
            const userCount = 1 + index;
            cy.get('.figure').eq(index).realHover().contains('View profile').click();
            cy.get('h1').should('have.text', 'Not Found');
            cy.url().should('include', `users/${userCount}`);
            cy.go('back');
        }
    });
});

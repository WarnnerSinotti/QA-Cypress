describe('06-Teste validando imagem quebrada', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(4) > a').should('contain.text', 'Broken Images').click();
    });

    it('Validando se a imagem possui img', () => {
        cy.allureSeverity('minor');

        cy.get('[src="img/avatar-blank.jpg"]').should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0);
    });

    it('Validando as imagens quebradas que não possui img na url', () => {
        cy.allureSeverity('minor');

        cy.get('[src="asdf.jpg"]').should('be.visible').and('have.prop', 'naturalWidth').should('eq', 0);
        cy.get('[src="hjkl.jpg"]').should('be.visible').and('have.prop', 'naturalWidth').should('eq', 0);
    });
});

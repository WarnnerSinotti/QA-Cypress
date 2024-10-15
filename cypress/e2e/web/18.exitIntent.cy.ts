describe('18-Teste validando modal em Exit Intent', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(16) > a').should('contain.text', 'Exit Intent').click();
    });

    it('Validando modal passando mouse do meio da tela para cima em Exit Intent', () => {
        cy.allureSeverity('normal');

        cy.get('.example > h3').should('be.visible');
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Calcular as coordenadas do meio da tela
        const middleX = screenWidth / 2;
        const middleY = screenHeight / 2;

        // Mover o mouse para o meio da tela
        cy.get('body').realMouseMove(middleX, middleY); // Mover para o meio da tela

        // Mover o mouse para cima a partir do meio da tela
        cy.get('body').realMouseMove(middleX, middleY - 100);
        cy.get('.modal').should('be.visible');
        cy.get('.modal-title').should('contain.text', 'This is a modal');
        cy.get('.modal-footer').contains('Close').click();
    });
});

describe('11-Teste validando Disappearing Elements', () => {
    const url = Cypress.env('BASE_URL');

    beforeEach(() => {
        cy.visit(url);
        cy.get('ul > :nth-child(9) > a').should('contain.text', 'Disappearing Elements').click();
    });

    it('Validando os Disappearing Elements', () => {
        cy.get('h3').should('contain.text', 'Disappearing Elements');
        cy.get('ul > li').eq(0).contains('Home');
        cy.get('ul > li').eq(1).contains('About');
        cy.get('ul > li').eq(2).contains('Contact Us');
        cy.get('ul > li').eq(3).contains('Portfolio');

        cy.get('ul > li').then((lis) => {
            const lengthOfLi = lis.length;
            cy.log(`O número de elementos <li> é: ${lengthOfLi}`);

            if (lengthOfLi === 5) {
                cy.get('ul > li').eq(4).contains('Gallery');
            }
        });
    });

    it('Validando os buttons no header de Disappearing Elements', () => {
        cy.get('h3').should('contain.text', 'Disappearing Elements');
        cy.get('ul > li').eq(0).contains('Home').click();
        cy.url().should('contain', url);
        cy.go('back');
        cy.get('ul > li').eq(1).contains('About').click();
        cy.url().should('contain', url + '/about');
        cy.go('back');
        cy.get('ul > li').eq(2).contains('Contact Us').click();
        cy.url().should('contain', url + '/contact-us');
        cy.go('back');
        cy.get('ul > li').eq(3).contains('Portfolio').click();
        cy.url().should('contain', url + '/portfolio');
        cy.go('back');

        cy.get('ul > li').then((lis) => {
            const lengthOfLi = lis.length;
            cy.log(`O número de elementos <li> é: ${lengthOfLi}`);

            if (lengthOfLi === 5) {
                cy.get('ul > li').eq(4).contains('Gallery').click();
                cy.url().should('contain', url + '/gallery');
                cy.go('back');
            }
        });
    });
});

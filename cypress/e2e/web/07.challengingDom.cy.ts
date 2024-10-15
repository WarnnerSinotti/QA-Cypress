describe('07-Teste validando imagem quebrada', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(5) > a').should('contain.text', 'Challenging DOM').click();
    });

    it('Validando os headers da tabela', () => {
        cy.allureSeverity('normal');

        const header: string[] = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Diceret', 'Action'];
        let headerCont: number = 0;
        for (let i = 1; i <= 7; i++) {
            cy.get(`thead > tr > :nth-child(${i})`).should('include.text', header[headerCont]);
            headerCont++;
        }
    });

    it('Validando segunda coluna', () => {
        cy.allureSeverity('normal');

        let number: number = 0;
        for (let i = 1; i <= 9; i++) {
            cy.get(`tbody > :nth-child(${i}) > :nth-child(2)`).should('include.text', `Apeirian${number}`);
            number++;
        }
    });

    it('Validando as cores dos buttons', () => {
        cy.allureSeverity('trivial');

        cy.get('.button').eq(0).should('have.css', 'background-color').and('eq', 'rgb(43, 166, 203)');
        cy.get('.button').eq(1).should('have.css', 'background-color').and('eq', 'rgb(198, 15, 19)');
        cy.get('.button').eq(2).should('have.css', 'background-color').and('eq', 'rgb(93, 164, 35)');
    });
});

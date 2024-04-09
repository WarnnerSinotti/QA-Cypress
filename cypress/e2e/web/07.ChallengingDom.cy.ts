describe('07-Teste validando imagem quebrada', () => {
    const url = Cypress.env('BASE_URL');

    beforeEach(() => {
        cy.visit(url);
        cy.get('ul > :nth-child(5) > a').should('contain.text', 'Challenging DOM').click();
    });

    it('Validando os headers da tabela', () => {
        const header: string[] = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Diceret', 'Action'];
        let headerCont: number = 0;
        for (let i = 1; i <= 7; i++) {
            cy.get(`thead > tr > :nth-child(${i})`).should('include.text', header[headerCont]);
            headerCont++;
        }
    });

    it('Validando segunda coluna', () => {
        let number: number = 0;
        for (let i = 1; i <= 9; i++) {
            cy.get(`tbody > :nth-child(${i}) > :nth-child(2)`).should('include.text', `Apeirian${number}`);
            number++;
        }
    });

    it('Validando as cores dos buttons', () => {
        cy.get('.button').eq(0).should('have.css', 'background-color').and('eq', 'rgb(43, 166, 203)');
        cy.get('.button').eq(1).should('have.css', 'background-color').and('eq', 'rgb(198, 15, 19)');
        cy.get('.button').eq(2).should('have.css', 'background-color').and('eq', 'rgb(93, 164, 35)');
    });
});

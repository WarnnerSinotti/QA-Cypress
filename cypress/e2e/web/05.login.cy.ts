describe('05-Teste Logando via url e via credenciais headers', () => {
    const username: string = Cypress.env('USERNAME');
    const password: string = Cypress.env('PASSWORD');
    const url = Cypress.env('BASE_URL') + '/basic_auth';

    it('Logando passando username and password na URL', function () {
        cy.visit(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.');
    });

    it('Logando com autorização do header', () => {
        // Para pegar o header de autrização, usa api ou postman
        cy.visit(url, {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4=',
            },
            failOnStatusCode: false,
        });
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.');
    });
});

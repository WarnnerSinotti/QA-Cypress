describe('19-Teste validando modal em File Download', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('BASE_URL'));
        cy.get('ul > :nth-child(17) > a').should('contain.text', 'File Download').click();
    });

    it('Validando modal passando mouse do meio da tela para cima em File Download', () => {
        cy.get('h3').should('contain.text', 'File Downloader');

        cy.get('[href="download/Jntuh.pdf.pdf"]').should('be.visible').click();
        cy.get('[href="download/Jntuh.pdf.pdf"]')
            .invoke('attr', 'href')
            .then((url) => {
                cy.log(url);
                const nomeArquivo = url.split('/').pop().split('?')[0];
                cy.log('Nome do arquivo:', nomeArquivo);
                cy.readFile(`cypress/downloads/${nomeArquivo}`).should('exist');
            });
    });
});

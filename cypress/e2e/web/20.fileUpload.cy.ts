describe('20-Teste insercao de documento para file upload', () => {
    const filePath = 'document.txt';

    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(18) > a').should('contain.text', 'File Upload').click();
    });

    it('Inserindo documento para upload', () => {
        cy.allureSeverity('critical');

        cy.intercept('POST', '/upload').as('uploadRequest');
        cy.get('h3').should('contain.text', 'File Upload');
        cy.get('[id="file-upload"]').attachFile(filePath);

        cy.get('[id="file-submit"]').click();
        cy.wait('@uploadRequest').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
        });

        cy.get('h3').should('contain.text', 'File Uploaded!');
        cy.get('#uploaded-files').should('be.visible');
    });
    it.skip('Inserindo documento via drag n drop', () => {
        cy.allureSeverity('critical');

        cy.intercept('POST', '/upload').as('uploadRequest');
        cy.get('h3').should('contain.text', 'File Upload');
        // em construção

        cy.get('[id="file-submit"]').click();
        cy.wait('@uploadRequest').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
        });

        cy.get('h3').should('contain.text', 'File Uploaded!');
        cy.get('#uploaded-files').should('be.visible');
    });
    it('clicar upload sem anexar documento, retornando erro 500', () => {
        cy.allureSeverity('critical');

        cy.intercept('POST', '/upload').as('uploadRequest');
        cy.get('h3').should('contain.text', 'File Upload');

        cy.get('[id="file-submit"]').click();
        cy.wait('@uploadRequest').then((interception) => {
            expect(interception.response.statusCode).to.equal(500);
        });
        cy.get('h1').should('contain.text', 'Internal Server Error');
    });
});

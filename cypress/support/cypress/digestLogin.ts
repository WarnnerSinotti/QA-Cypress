declare global {
    namespace Cypress {
        interface Chainable {
            loginDigestAuth(username: string, password: string): typeof loginDigestAuth;
        }
    }
}

export const deleteFile = (filePath: string) => {
    cy.exec(`rm -f ${filePath}`, { failOnNonZeroExit: false });
};

export const loginDigestAuth = (username: string, password: string) => {
    cy.request({
        method: 'GET',
        url: 'https://the-internet.herokuapp.com/digest_auth',
        auth: {
            user: username,
            pass: password,
            type: 'digest',
        },
        failOnStatusCode: false,
    }).then((response) => {
        // Verifique se a resposta é bem-sucedida e se a autenticação foi feita corretamente
        expect(response.status).to.eq(200);
        // cy.visit('https://the-internet.herokuapp.com/digest_auth');
    });
};

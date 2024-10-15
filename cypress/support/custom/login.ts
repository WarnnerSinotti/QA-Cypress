declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string, messageStatusCode: string): typeof login;
        }
    }
}

export const login = (username: string, password: string, messageStatusCode: string) => {
    cy.intercept('POST', 'https://the-internet.herokuapp.com/authenticate').as('authentication');
    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('[type="submit"]').should('contain', 'Login').click();
    cy.wait('@authentication').its('response.statusCode').should('eq', 303);
    cy.get('[id="flash"]').should('be.visible').should('contain.text', messageStatusCode);
};

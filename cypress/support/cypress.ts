import { MailSlurp } from 'mailslurp-client';
import * as mammoth from 'mammoth';
declare global {
    namespace Cypress {
        interface Chainable {
            mailslurp: typeof mailslurp;
            mailslurp1: typeof mailslurp1;
            readDocxFile: typeof readDocxFile;
        }
    }
}
// Acessando mailsurp para testes de email
export const mailslurp = () => {
    const apiKey = Cypress.env('MAILSLURP_API_KEY');
    if (!apiKey) {
        throw new Error(
            'Error no MailSlurp API Key. Please set the `MAILSLURP_API_KEY` ' +
                'environment variable to the value of your MailSlurp API Key to use the MailSlurp Cypress plugin. ' +
                'Create a free account at https://app.mailslurp.com/sign-up/. See https://docs.cypress.io/guides/guides/environment-variables#Option-3- for more information.'
        );
    }
    // create an instance of mailslurp-client
    const mailslurp = new MailSlurp({ apiKey, basePath: 'https://cypress.api.mailslurp.com' });
    return Promise.resolve(mailslurp);
};

export const mailslurp1 = () => {
    const apiKey = Cypress.env('MAILSLURP_API_KEY_1');
    if (!apiKey) {
        throw new Error(
            'Error no MailSlurp API Key. Please set the `MAILSLURP_API_KEY_1` ' +
                'environment variable to the value of your MailSlurp API Key to use the MailSlurp Cypress plugin. ' +
                'Create a free account at https://app.mailslurp.com/sign-up/. See https://docs.cypress.io/guides/guides/environment-variables#Option-3- for more information.'
        );
    }
    // create an instance of mailslurp-client
    const mailslurp = new MailSlurp({ apiKey, basePath: 'https://cypress.api.mailslurp.com' });
    return Promise.resolve(mailslurp);
};

export const readDocxFile = (filePath: string): Cypress.Chainable<string> => {
    return cy.readFile(filePath, 'binary').then((data) => {
        return new Cypress.Promise<string>((resolve, reject) => {
            mammoth
                .extractRawText({ arrayBuffer: data })
                .then((result) => resolve(result.value))
                .catch(reject);
        });
    });
};

import { MailSlurp } from 'mailslurp-client';

declare namespace Cypress {
    interface Chainable<> {
        mailslurp: () => Promise<MailSlurp>;
    }
}

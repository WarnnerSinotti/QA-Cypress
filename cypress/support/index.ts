import { allureSeverity, allureSuite } from './allure';
import { login } from './custom/login';
import { mailslurp, readDocxFile } from './cypress';
import { deleteFile } from './cypress/cypress';
import { loginDigestAuth } from './cypress/digestLogin';
import { validarAssinaturaNoPdf, validarPaginasNoPdf, validarTextoNoPdf } from './pdf/pdf';

Cypress.Commands.add('login', login);
Cypress.Commands.add('mailslurp', mailslurp);
Cypress.Commands.add('readDocxFile', readDocxFile);
Cypress.Commands.add('loginDigestAuth', loginDigestAuth);
Cypress.Commands.add('validarPaginasNoPdf', validarPaginasNoPdf);
Cypress.Commands.add('validarTextoNoPdf', validarTextoNoPdf);
Cypress.Commands.add('validarAssinaturaNoPdf', validarAssinaturaNoPdf);
Cypress.Commands.add('deleteFile', deleteFile);

// Allure Report
Cypress.Commands.add('allureSeverity', allureSeverity);
Cypress.Commands.add('allureSuite', allureSuite);

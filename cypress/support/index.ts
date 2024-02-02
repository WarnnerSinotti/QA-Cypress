import { mailslurp, readDocxFile } from './cypress';
import { deleteFile } from './cypress/cypress';
import { validarAssinaturaNoPdf, validarPaginasNoPdf, validarTextoNoPdf } from './pdf/pdf';

Cypress.Commands.add('mailslurp', mailslurp);
Cypress.Commands.add('readDocxFile', readDocxFile);
Cypress.Commands.add('validarPaginasNoPdf', validarPaginasNoPdf);
Cypress.Commands.add('validarTextoNoPdf', validarTextoNoPdf);
Cypress.Commands.add('validarAssinaturaNoPdf', validarAssinaturaNoPdf);
Cypress.Commands.add('deleteFile', deleteFile);

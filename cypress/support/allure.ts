import * as allure from 'allure-js-commons';

type Severity = 'minor' | 'trivial' | 'normal' | 'critical' | 'blocker';

declare global {
    namespace Cypress {
        interface Chainable {
            allureSeverity(severity: Severity): typeof allureSeverity;
            allureSuite(suiteDescrive: string): typeof allureSuite;
        }
    }
}

export const allureSeverity = (severity: string) => {
    allure.severity(severity);
};

export const allureSuite = (suiteDescrive: string) => {
    allure.suite(suiteDescrive);
};

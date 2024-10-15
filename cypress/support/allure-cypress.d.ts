declare module 'allure-cypress/reporter' {
    export function allureCypress(on: any, config: any, options?: { resultsDir?: string }): void;
    export const allure: any;
}

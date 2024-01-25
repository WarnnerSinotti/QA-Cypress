import { defineConfig } from 'cypress';
import { readPdf, readPdfGetNumPages, readPdfGetSignature } from 'cypress/scripts/pdf';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            on('task', {
                readPdf,
                readPdfGetNumPages,
                readPdfGetSignature,
            });
            return config;
        },

        env: {
            hideXhr: true,
            allureReuseAfterSpec: false,
            snapshotOnly: false,
            allure: true,
            allureLogCypress: true,
        },
        projectId: 'qyepsy',
        experimentalRunAllSpecs: true,
        experimentalOriginDependencies: true,
        defaultCommandTimeout: 25000,
        requestTimeout: 25000,
        responseTimeout: 25000,
        video: false,
        videosFolder: 'cypress/videos',
        watchForFileChanges: true,
        screenshotOnRunFailure: true,
        screenshotsFolder: 'cypress/screenshots',
        trashAssetsBeforeRuns: true,
        downloadsFolder: 'cypress/downloads',
        experimentalWebKitSupport: true,
        chromeWebSecurity: false,
        retries: {
            runMode: 1,
            openMode: 0,
        },
    },
});

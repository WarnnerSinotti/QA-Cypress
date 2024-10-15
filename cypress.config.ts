import { defineConfig } from 'cypress';
import { readPdf, readPdfGetNumPages, readPdfGetSignature } from './cypress/scripts/pdf';
import { allureCypress } from 'allure-cypress/reporter';
import * as os from 'node:os';
import * as fs from 'fs';
import * as path from 'path';

export default defineConfig({
    e2e: {
        baseUrl: 'https://the-internet.herokuapp.com',
        setupNodeEvents(on, config) {
            on('task', {
                readPdf,
                readPdfGetNumPages,
                readPdfGetSignature,
            });
            // Configuração do Allure sem 'environmentInfo'
            allureCypress(on, config, {
                resultsDir: 'allure-results',
            });

            // Caminho do diretório allure-results
            const resultsDir = path.join(__dirname, 'allure-results');

            // Verifica se o diretório existe; se não, cria o diretório
            if (!fs.existsSync(resultsDir)) {
                fs.mkdirSync(resultsDir);
            }

            // Criar o arquivo environment.properties para o Allure
            const environmentInfo = [
                `OS Platform=${os.platform()}`,
                `OS Release=${os.release()}`,
                `OS Version=${os.version()}`,
                `Node Version=${process.version}`,
                `Ambiente=Local`,
            ].join('\n');

            fs.writeFileSync(path.join(resultsDir, 'environment.properties'), environmentInfo);

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

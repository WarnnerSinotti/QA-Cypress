import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

export const readPdf = (pathToPdf: string) => {
    try {
        return new Promise((resolve) => {
            const pdfPath = path.resolve(pathToPdf);
            const dataBuffer = fs.readFileSync(pdfPath);
            pdf(dataBuffer).then(function ({ text }) {
                resolve(text);
            });
        });
    } catch (error) {
        console.error('Erro ao verificar numero de paginas no PDF:', error);
        return false;
    }
};

export const readPdfGetNumPages = (pathToPdf: string) => {
    // Não funcionando, ocorrendo erro no cypress
    try {
        return new Promise((resolve) => {
            const pdfPath = path.resolve(pathToPdf);
            const dataBuffer = fs.readFileSync(pdfPath);
            pdf(dataBuffer).then(function ({ numpages }) {
                resolve(numpages);
            });
        });
    } catch (error) {
        console.error('Erro ao verificar numero de paginas no PDF:', error);
        return false;
    }
};

export const readPdfGetSignature = async (filePath: string): Promise<boolean> => {
    try {
        const pdfBuffer = await fs.promises.readFile(filePath);
        const pdfText = pdfBuffer.toString('binary');

        // Procurar por indicações de assinatura no texto do PDF
        const hasSignature: boolean = pdfText.includes('/ByteRange') && pdfText.includes('/Contents');
        return hasSignature;
    } catch (error) {
        console.error('Erro ao verificar assinatura no PDF:', error);
        return false; // Retorna false em caso de erro ou se não encontrar assinatura
    }
};

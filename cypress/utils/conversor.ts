export class Conversor {
    CepOriginal(cep: string): string {
        const cepOriginal = `${cep.substring(0, 5)}-${cep.substring(5)}`;
        return cepOriginal;
    }

    CpfOriginal(cpf: string): string {
        const cpfOriginal = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9)}`;
        return cpfOriginal;
    }

    RgOriginal(rg: string): string {
        const rgOriginal = `${rg.substring(0, 2)}.${rg.substring(2, 5)}.${rg.substring(5, 8)}-${rg.substring(8)}`;
        return rgOriginal;
    }

    CnpjOriginal(cnpj: string): string {
        const cnpjOriginal = `${cnpj.substring(0, 2)}.${cnpj.substring(2, 5)}.${cnpj.substring(5, 8)}/${cnpj.substring(
            8,
            12
        )}-${cnpj.substring(12)}`;
        return cnpjOriginal;
    }
}

export default new Conversor();

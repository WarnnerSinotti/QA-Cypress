export class DateToday {
    private dataAtual: Date = new Date();

    dia: number = this.dataAtual.getDate();
    mes: number = this.dataAtual.getMonth() + 1;
    mesAtual = String(this.dataAtual.getMonth() + 1).padStart(2, '0'); // Incluindo zero
    ano: number = this.dataAtual.getFullYear();
    hora: number = this.dataAtual.getHours();
    minuto: number = this.dataAtual.getMinutes();
    segundos: number = this.dataAtual.getSeconds();

    DateName(): string {
        const datename: string = `${this.ano}${this.mes}${this.dia}${this.hora}${this.minuto}${this.segundos}`;
        return datename;
    }

    DayToday(): string {
        const day: string = `${this.dia}`;
        return day;
    }

    CertificateDate(): string {
        const certificateDate = `${this.dia}/${this.mesAtual}/${this.ano}`;
        return certificateDate;
    }
}

export default new DateToday();

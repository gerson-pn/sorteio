export default class Extrator {
    protected dadosBrutos: string
    constructor(dadosBrutos: string) {
        this.dadosBrutos = dadosBrutos
    }
    public extrair(): string[] {
        let dadosSeparados = this.dadosBrutos.split(',')
        return dadosSeparados
    }
}
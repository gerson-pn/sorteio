import ProcessadorEspacoBranco from "../processadores/processadorEspacoBranco"
import ProcessadorMaiusculo from "../processadores/processadorMaiusculo"

export default class Extrator {
    protected dadosBrutos: string
    constructor(dadosBrutos: string) {
        this.dadosBrutos = dadosBrutos
    }
    public extrair(): string[] {
        let dadosSemTratamento = this.dadosBrutos.split('\r\n')
        let processadorEspacoBranco = new ProcessadorEspacoBranco(dadosSemTratamento)
        let processadorMaiusculo = new ProcessadorMaiusculo(processadorEspacoBranco.processar())
        let dadosSeparados = processadorMaiusculo.processar()
        return dadosSeparados
    }
}
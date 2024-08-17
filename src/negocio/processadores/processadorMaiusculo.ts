import Processador from "./processador";

export default class ProcessadorMaiusculo extends Processador{
    public processar(): string[] {
        let dadosProcessados: string[] = []
        this.dados.forEach(elemento =>{
            dadosProcessados.push(elemento.toUpperCase())
        })
        return dadosProcessados
    }
}
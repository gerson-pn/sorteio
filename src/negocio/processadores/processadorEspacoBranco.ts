import Processador from "./processador";

export default class ProcessadorEspacoBranco extends Processador{
    public processar(): string[] {
        let dadosProcessados: string[] = []
        this.dados.forEach(elemento =>{
            dadosProcessados.push(elemento.trim())
        })
        return dadosProcessados
    }
}
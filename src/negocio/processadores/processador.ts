export default abstract class Processador {
    protected dados: string[]
    constructor(dados: string[]){
        this.dados = dados
    }
    public abstract processar(): string[]
}
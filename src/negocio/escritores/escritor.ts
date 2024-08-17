import Dado from "../../modelos/dado"

export default abstract class Escritor {
    protected nomeArquivo: string
    protected caminhoExecutavel: string
    private readonly sufixoExecutavel = 'out\\app'
    private readonly sufixoArquivos = 'arquivos'
    protected lista: Array<Dado>
    constructor(nomeArquivo: string, caminhoExecutavel: string, lista: Array<Dado>) {
        this.nomeArquivo = nomeArquivo
        this.caminhoExecutavel = caminhoExecutavel
        this.lista = lista
    }
    protected obterCaminho(): string {
        let caminhoArquivos = this.caminhoExecutavel.replace(this.sufixoExecutavel, this.sufixoArquivos);
        return caminhoArquivos
    }
    public abstract escrever(): void
}
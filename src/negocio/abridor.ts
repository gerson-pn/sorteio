import path from "path"
import { readFileSync } from "fs"

export default class Abridor {
    private nomeArquivo: string
    private caminhoExecutavel: string
    private readonly sufixoExecutavel = 'out\\app'
    private readonly sufixoArquivos = 'arquivos'
    constructor(nomeArquivo: string, caminhoExecutavel: string) {
        this.nomeArquivo = nomeArquivo
        this.caminhoExecutavel = caminhoExecutavel
    }
    private obterCaminho(): string {
        let caminhoArquivos = this.caminhoExecutavel.replace(this.sufixoExecutavel, this.sufixoArquivos);
        return caminhoArquivos
    }
    public abrir(): string {
        let caminhoCompleto = path.join(this.obterCaminho(), this.nomeArquivo)
        let arquivo = readFileSync(caminhoCompleto, 'ascii');
        return arquivo
    }
}
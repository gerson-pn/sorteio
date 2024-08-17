import path from "path";
import Escritor from "./escritor";
import { writeFileSync } from "fs";

export default class EscritorJson extends Escritor {
    public escrever(): void {
        let caminhoCompleto = path.join(this.obterCaminho(), this.nomeArquivo)
        let jsons: { indice: number; nome: any; atividade: any; }[] = []
        this.lista.forEach(elemento => {
            let elementoJson = {
                'indice': this.lista.indexOf(elemento),
                'nome': elemento.atributo,
                'atividade': elemento.categoria
            }
            jsons.push(elementoJson)
        })
        let arquivo = JSON.stringify(jsons)
        writeFileSync(caminhoCompleto, arquivo)
    }

}
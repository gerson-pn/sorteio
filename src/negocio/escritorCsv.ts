import path from "path";
import { writeFileSync } from "fs";
import Escritor from "./escritor";

export default class EscritorCsv extends Escritor {
    public escrever(): void {
        let caminhoCompleto = path.join(this.obterCaminho(), this.nomeArquivo)
        let arquivo = ``
        this.lista.forEach(elemento => {
            let indiceElemento = this.lista.indexOf(elemento)
            if (indiceElemento < 10) {
                let linha = `indice: 0${this.lista.indexOf(elemento)}, nome: ${elemento.atributo}, atividade: ${elemento.categoria}`
                arquivo = arquivo + linha + `\r\n`
            } else {
                let linha = `indice: ${this.lista.indexOf(elemento)}, nome: ${elemento.atributo}, atividade: ${elemento.categoria}`
                arquivo = arquivo + linha + `\r\n`
            }

        })
        writeFileSync(caminhoCompleto, arquivo)

    }
}
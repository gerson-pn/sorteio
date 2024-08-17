import Dado from "../../modelos/dado";
import Gerador from "./gerador";

export default class GeradorTipoC extends Gerador {
    public gerar(): Dado[] {
        let dados: Array<Dado> = []
        let categoriasEmbaralhadas = this.embaralhador.embaralhar(this.categorias)
        let atributosEmbaralhados = this.embaralhador.embaralhar(this.atributos)

        atributosEmbaralhados.forEach(atributo => {
            let categoria = categoriasEmbaralhadas[this.embaralhador.indiceAleatorio(categoriasEmbaralhadas)]
            let dado = new Dado(atributo, categoria)
            dados.push(dado)
        })
        return dados
    }
}
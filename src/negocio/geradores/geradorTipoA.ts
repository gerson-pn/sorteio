import Dado from "../../modelos/dado";
import Gerador from "./gerador";

export default class GeradorTipoA extends Gerador {
    public gerar(): Dado[] {
        let dados: Array<Dado> = []
        let categoriasEmbaralhadas = this.embaralhador.embaralhar(this.categorias)
        let atributosEmbaralhados = this.embaralhador.embaralhar(this.atributos)
        categoriasEmbaralhadas.forEach(categoria => {
            let indice = categoriasEmbaralhadas.indexOf(categoria)
            let dado = new Dado(atributosEmbaralhados[indice], categoriasEmbaralhadas[indice])
            dados.push(dado)
        })
        return dados
    }

}
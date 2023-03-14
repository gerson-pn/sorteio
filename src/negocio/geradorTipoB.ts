import Dado from "../modelos/dado";
import Expansor from "./expansor";
import Gerador from "./gerador";

export default class GeradorTipoB extends Gerador {
    private expansor: Expansor
    constructor(categorias: Array<any>, atributos: Array<any>) {
        super(categorias, atributos)
        this.expansor = new Expansor(atributos, categorias)
    }

    public gerar(): Dado[] {
        let dados: Array<Dado> = []
        let categoriasEmbaralhadas = this.embaralhador.embaralhar(this.expansor.expandir())
        let atributosEmbaralhados = this.embaralhador.embaralhar(this.atributos)
        categoriasEmbaralhadas.forEach(categoria => {
            let indice = categoriasEmbaralhadas.indexOf(categoria)
            let dado = new Dado(atributosEmbaralhados[indice], categoriasEmbaralhadas[indice])
            dados.push(dado)
        })
        return dados
    }
}
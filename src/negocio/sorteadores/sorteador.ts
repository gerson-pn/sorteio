import Dado from "../../modelos/dado"
import Gerador from "../geradores/gerador"
import GeradorTipoA from "../geradores/geradorTipoA"
import GeradorTipoB from "../geradores/geradorTipoB"
import GeradorTipoC from "../geradores/geradorTipoC"

export default class Sorteador {
    private categorias: Array<any>
    private atributos: Array<any>
    private gerador: Gerador | null

    constructor(categorias: Array<any>, atributos: Array<any>) {
        this.categorias = categorias
        this.atributos = atributos
        this.gerador = null
    }

    public sortear(): Array<Dado> {
        let sorteados: Array<Dado> = []
        if (this.atributos.length == this.categorias.length) {
            this.gerador = new GeradorTipoA(this.categorias, this.atributos)
            sorteados = this.gerador.gerar()
        } else if (this.atributos.length > this.categorias.length) {
            this.gerador = new GeradorTipoB(this.categorias, this.atributos)
            sorteados = this.gerador.gerar()
        } else {
            this.gerador = new GeradorTipoC(this.categorias, this.atributos)
            sorteados = this.gerador.gerar()
        }
        return sorteados
    }
}
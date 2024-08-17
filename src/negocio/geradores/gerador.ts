import Dado from "../../modelos/dado"
import Embaralhador from "../embaralhadores/embaralhador"

export default abstract class Gerador{
    protected categorias: Array<any>
    protected atributos: Array<any>
    protected embaralhador: Embaralhador

    constructor(categorias: Array<any>, atributos: Array<any>) {
        this.categorias = categorias
        this.atributos = atributos
        this.embaralhador = new Embaralhador()
    }

    public abstract gerar(): Array<Dado>
}
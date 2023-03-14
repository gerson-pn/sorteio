export default class Embaralhador {
    public indiceAleatorio(lista: Array<any>): number {
        return Math.floor(Math.random() * lista.length)
    }

    public embaralhar(lista: Array<any>): Array<any> {
        let listaEmbaralhada = []
        while (lista.length > 0) {
            let indice = this.indiceAleatorio(lista.reverse())
            let elemento = lista.splice(indice, 1)
            listaEmbaralhada.push(elemento)
        }
        return listaEmbaralhada
    }
}
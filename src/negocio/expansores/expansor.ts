export default class Expansor {
    private listaMaior: Array<any>
    private listaMenor: Array<any>
    constructor(listaMaior: Array<any>, listaMenor: Array<any>) {
        this.listaMaior = listaMaior
        this.listaMenor = listaMenor
    }

    private verificarMultiplicidade(tamanhoMaior: number, tamanhoMenor: number): boolean {
        let restoDivisao = tamanhoMaior % tamanhoMenor
        if (restoDivisao == 0) {
            return true
        } else {
            return false
        }
    }

    public expandir(): Array<any> {
        let listaMenorExpandida: Array<any> = []
        let tamanhoListaMaior = this.listaMaior.length
        let tamanhoListaMenor = this.listaMenor.length
        let diferencaTamanho = tamanhoListaMaior - tamanhoListaMenor
        let multiplicidade = this.verificarMultiplicidade(tamanhoListaMaior, tamanhoListaMenor)

        if (multiplicidade) {
            let quantidadeMaior = tamanhoListaMaior / tamanhoListaMenor
            for (let indice = 0; indice < quantidadeMaior; indice++) {
                this.listaMenor.forEach(elemento => { listaMenorExpandida.push(elemento) })
            }
        } else {
            this.listaMenor.forEach(elemento => { listaMenorExpandida.push(elemento) })
            if (diferencaTamanho <= tamanhoListaMenor) {
                for (let indice = 0; indice < diferencaTamanho; indice++) {
                    listaMenorExpandida.push(this.listaMenor[indice])
                }
            } else {
                while (diferencaTamanho > 0) {
                    if (diferencaTamanho > tamanhoListaMenor) {
                        for (let indice = 0; indice < tamanhoListaMenor; indice++) {
                            listaMenorExpandida.push(this.listaMenor[indice])
                            diferencaTamanho = diferencaTamanho - 1
                        }
                    } else {
                        for (let indice = 0; indice < diferencaTamanho; indice++) {
                            listaMenorExpandida.push(this.listaMenor[indice])
                            diferencaTamanho = diferencaTamanho - 1
                        }
                    }
                }
            }
        }
        return listaMenorExpandida
    }
}
import Abridor from "../negocio/abridor";
import EscritorCsv from "../negocio/escritorCsv";
import EscritorJson from "../negocio/escritorJson";
import Extrator from "../negocio/extrator";
import Sorteador from "../negocio/sorteador";

let abridorCategorias = new Abridor('categorias.csv', __dirname)
let extratorCategorias = new Extrator(abridorCategorias.abrir())
let categorias = extratorCategorias.extrair()

let abridorAtributos = new Abridor('atributos.csv', __dirname)
let extratorAtributos = new Extrator(abridorAtributos.abrir())
let atributos = extratorAtributos.extrair()

let sorteador = new Sorteador(categorias, atributos)
let sorteados = sorteador.sortear()

let escritorCsv = new EscritorCsv('sorteio.csv', __dirname, sorteados)
escritorCsv.escrever()
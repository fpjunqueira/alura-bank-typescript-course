import { Imprimivel } from "../models/index";

export function imprime(...imprimiveis: Imprimivel[]) {

    imprimiveis.forEach(imprimivei => imprimivei.paraTexto());
}
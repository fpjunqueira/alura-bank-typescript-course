import { Negociacao } from './Negociacao';
import { logarCriacaoDeClasse } from "../helpers/decorators/index";
import { Imprimivel } from './Imprimivel';

@logarCriacaoDeClasse()
export class Negociacoes implements Imprimivel {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log('Impresssão');
        console.log(
            JSON.stringify(this._negociacoes)
        );
    }
}
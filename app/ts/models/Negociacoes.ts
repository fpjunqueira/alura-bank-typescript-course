import { Negociacao } from './Negociacao';
import { logarCriacaoDeClasse } from "../helpers/decorators/index";
import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

@logarCriacaoDeClasse()
export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {

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

    ehIgual(negociacoes: Negociacoes): boolean {

        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes);
    }
}
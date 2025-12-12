import { Jogo } from "./Jogo"

export class MidiaDigital extends Jogo {
    private _codigoAtivacao: string

    constructor(codigo: number, plataforma: string, tipo: number, titulo: string, valor: number, codigoAtivacao: string) {
        super(codigo, plataforma, tipo, titulo, valor)
        this._codigoAtivacao = codigoAtivacao
    }


    public get codigoAtivacao() {
        return this._codigoAtivacao
    }

    public set codigoAtivacao(codigoAtivacao: string) {
        this._codigoAtivacao = codigoAtivacao
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`Codigo de Ativação: ${this._codigoAtivacao}`)
    }
}
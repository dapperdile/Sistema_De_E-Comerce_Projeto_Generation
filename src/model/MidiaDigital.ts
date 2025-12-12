import { Jogo } from "./Jogo"

export class MidiaDigital extends Jogo {
    private _codigoAtivacao: string

    constructor(codigo: number, plataforma: string, titulo: string, valor: number, codigoAtivacao?: string
    ) {
        super(codigo, plataforma, 2, titulo, valor)
        this._codigoAtivacao = codigoAtivacao ?? MidiaDigital.gerarCodigo()
    }

    public get codigoAtivacao() {
        return this._codigoAtivacao
    }

    public set codigoAtivacao(codigoAtivacao: string) {
        this._codigoAtivacao = codigoAtivacao
    }

    public static gerarCodigo(): string {
        return Math.random().toString(36).substring(2, 10).toUpperCase()
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`Código de Ativação: ${this._codigoAtivacao}`)
    }
}

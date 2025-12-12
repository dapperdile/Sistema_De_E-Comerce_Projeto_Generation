import { Jogo } from "./Jogo"

export class MidiaFisica extends Jogo {
    private _frete: number

    constructor(codigo: number, plataforma: string, tipo: number, titulo: string, valor: number, frete: number) {
        super(codigo, plataforma, tipo, titulo, valor)
        this._frete = frete
    }


    public get frete() {
        return this._frete
    }

    public set frete(frete: number) {
        this._frete = frete
    }

    public visualizar(): void {
        super.visualizar()
        console.log("Frete: ", + this._frete.toFixed(2))
    }
}
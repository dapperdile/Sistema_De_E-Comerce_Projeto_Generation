import { Jogo } from "./Jogo"

export class MidiaFisica extends Jogo {
    private _frete: number
    private _estoque: number

    constructor(codigo: number, plataforma: string, titulo: string, valor: number, frete: number, estoque: number = 1
    ) {
        super(codigo, plataforma, 1, titulo, valor)
        this._frete = frete
        this._estoque = estoque
    }

    public get frete() {
        return this._frete
    }

    public set frete(frete: number) {
        this._frete = frete
    }

    public get estoque() {
        return this._estoque
    }

    public set estoque(qtde: number) {
        this._estoque = qtde
    }

    public calcularPrecoTotal(): number {
        return this.valor + this.frete
    }

    public diminuirEstoque(): boolean {
        if (this._estoque > 0) {
            this._estoque--
            return true
        }
        return false
    }


    public visualizar(): void {
        super.visualizar()
        console.log(`Frete: ${this._frete.toFixed(2)}`)
        console.log(`Preço Total (com frete): ${this.calcularPrecoTotal().toFixed(2)}`)
        console.log(`Quantidade em estoque: ${this._estoque}`)
    }
}

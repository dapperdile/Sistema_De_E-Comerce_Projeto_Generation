import { Jogo } from "../model/Jogo";
import { MidiaFisica } from "../model/MidiaFisica";

export class CarrinhoController {

    private carrinho: Array<Jogo> = []

    adicionar(jogo: Jogo): boolean {

        if (jogo instanceof MidiaFisica) {
            if (jogo.estoque <= 0) {
                return false
            } else {
                jogo.diminuirEstoque()
            }
        }

        this.carrinho.push(jogo)
        return true
    }

    remover(codigo: number): boolean {
        let index = this.carrinho.findIndex(j => j.codigo === codigo)

        if (index >= 0) {
            this.carrinho.splice(index, 1)
            return true
        }
        return false
    }

    listar(): void {
        if (this.carrinho.length === 0) {
            console.log("\nCarrinho vazio!\n")
            return
        }

        console.log("\n######## ITENS DO CARRINHO ########")
        this.carrinho.forEach(j => j.visualizar())
        console.log("####################################")
    }

    total(): number {
        let sum = 0

        for (let j of this.carrinho) {
            sum += j.valor

            if (j instanceof MidiaFisica) {
                sum += j.frete
            }
        }

        return sum
    }
}

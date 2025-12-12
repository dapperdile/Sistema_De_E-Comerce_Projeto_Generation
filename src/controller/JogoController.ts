import { Jogo } from "../model/Jogo";
import { JogoRepository } from "../repository/JogoRepository";
import { colors } from "../util/Colors";

export class JogoController implements JogoRepository {
    private listaJogos: Array<Jogo> = new Array<Jogo>()
    codigo: number = 0


    procurarPorCodigo(codigo: number): void {
        let buscaJogo = this.buscarNoArray(codigo)

        if (buscaJogo != null) {
            buscaJogo.visualizar()
        } else
            console.log(colors.fg.red, `\nO Jogo codigo: ${codigo} não foi encontrado!`, colors.reset)
    }

    listarTodos(): void {
        for (let jogo of this.listaJogos){
            jogo.visualizar()
        }
    }

    cadastrar(jogo: Jogo): void {
        this.listaJogos.push(jogo)
        console.log(colors.fg.greenstrong, `\nO jogo número: ${jogo.codigo} foi adicionado com sucesso!`, colors.reset)
    }

    atualizar(jogo: Jogo): void {
        let buscaJogo = this.buscarNoArray(jogo.codigo)

        if (buscaJogo != null) {
            this.listaJogos[this.listaJogos.indexOf(buscaJogo)] = jogo
            console.log(colors.fg.greenstrong, `\nO jogo codigo: ${jogo.codigo} foi atualizado com sucesso!`, colors.reset)
        } else
            console.log(colors.fg.red, `\nA jogo codigo ${jogo.codigo} não foi encontrado!`, colors.reset)
    }

    deletar(codigo: number): void {
        let buscaJogo = this.buscarNoArray(codigo)

        if (buscaJogo != null) {
            this.listaJogos.splice(this.listaJogos.indexOf(buscaJogo), 1)
            console.log(colors.fg.greenstrong, `\nO jogo codigo: ${codigo} foi removido com sucesso!`, colors.reset)
        } else
            console.log(colors.fg.red, `\nO jogo codigo: ${codigo} não foi encontrado!`, colors.reset)
    }


    public gerarCodigo(): number {
        return ++ this.codigo
    }

    public buscarNoArray(codigo: number): Jogo | null {
        for (let conta of this.listaJogos) {
            if (conta.codigo === codigo)
                return conta
        }
        return null
    }
}
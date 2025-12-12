import { Jogo } from "../model/Jogo";
import { JogoRepository } from "../repository/JogoRepository";
import { colors } from "../util/Colors";

export class JogoController implements JogoRepository {
    private listaJogos: Map<number, Jogo> = new Map();
    codigo: number = 0;

    procurarPorCodigo(codigo: number): void {
        const jogo = this.encontrarJogoPorCodigo(codigo);
        if (jogo) {
            jogo.visualizar();
        } else {
            console.log(colors.fg.red, `\nO Jogo código: ${codigo} não foi encontrado!`, colors.reset);
        }
    }

    listarTodos(): void {
        this.listaJogos.forEach((jogo) => jogo.visualizar());
    }

    cadastrar(jogo: Jogo): void {
        if (jogo.valor < 0) {
            console.log(colors.fg.red, "Preço inválido!", colors.reset);
            return;
        }
        this.listaJogos.set(jogo.codigo, jogo);
        console.log(colors.fg.greenstrong, `\nO jogo número: ${jogo.codigo} foi adicionado com sucesso!`, colors.reset);
    }

    atualizar(jogo: Jogo): void {
        if (this.listaJogos.has(jogo.codigo)) {
            this.listaJogos.set(jogo.codigo, jogo);
            console.log(colors.fg.greenstrong, `\nO jogo código: ${jogo.codigo} foi atualizado com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO jogo código: ${jogo.codigo} não foi encontrado!`, colors.reset);
        }
    }

    deletar(codigo: number): void {
        if (this.listaJogos.has(codigo)) {
            this.listaJogos.delete(codigo);
            console.log(colors.fg.greenstrong, `\nO jogo código: ${codigo} foi removido com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO jogo código: ${codigo} não foi encontrado!`, colors.reset);
        }
    }

    public gerarCodigo(): number {
        return ++this.codigo;
    }

    public encontrarJogoPorCodigo(codigo: number): Jogo | null {
        return this.listaJogos.get(codigo) || null;
    }
}

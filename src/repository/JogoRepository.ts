import { Jogo } from "../model/Jogo"

export interface JogoRepository {
    procurarPorCodigo(numero: number): void
    listarTodos(): void
    cadastrar(jogo: Jogo): void
    atualizar(jogo: Jogo): void
    deletar(numero: number): void

}
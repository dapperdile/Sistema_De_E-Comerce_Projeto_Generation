import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { JogoController } from "./src/controller/JogoController";
import { MidiaDigital } from "./src/model/MidiaDigital";
import { MidiaFisica } from "./src/model/MidiaFisica";
import { CarrinhoController } from "./src/controller/CarrinhoController";

export function main() {

    let jogos: JogoController = new JogoController()
    let carrinho = new CarrinhoController()

    // Declaração de Variáveis
    let opcao, codigo, tipo, valor, frete, estoque: number
    let plataforma, titulo: string
    const tiposJogos = ['Mídia Física', 'Mídia Digital']

    // Criando Jogos para Teste
    console.log("\nCriar Jogos\n");

    let mf1: MidiaFisica = new MidiaFisica(jogos.gerarCodigo(), "PC", "ELDEN RING", 250, 50.0, 5);
    jogos.cadastrar(mf1);
    
    let mf2: MidiaFisica = new MidiaFisica(jogos.gerarCodigo(), "PS4", "Bloodborne", 200, 30.0, 2);
    jogos.cadastrar(mf2);
    
    let md1: MidiaDigital = new MidiaDigital(jogos.gerarCodigo(), "XBOX", "HALO 3", 180,);
    jogos.cadastrar(md1);
    
    let md2: MidiaDigital = new MidiaDigital(jogos.gerarCodigo(), "SWITCH 2", "Donkey Kong Bananza", 350,);
    jogos.cadastrar(md2);

    jogos.listarTodos();

    while (true) {

        console.log(colors.bg.black, colors.fg.greenstrong)
        console.log("#####################################################");
        console.log("                                                     ");
        console.log("               LOJA DA ZTEAM GAMES               ");
        console.log("                                                     ");
        console.log("#####################################################");
        console.log("                                                     ");
        console.log("            1 - Adicionar jogo a Loja                  ");
        console.log("            2 - Listar Jogos              ");
        console.log("            3 - Buscar jogo por número              ");
        console.log("            4 - Atualizar Informações do jogo             ");
        console.log("            5 - Apagar jogo                         ");
        console.log("            6 - Carrinho                        ");
        console.log("            7 - Sair                                 ");
        console.log("                                                     ");
        console.log("#####################################################");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 7) {
            console.log(colors.fg.yellow,"\nLoja Zteam Games - Volte Sempre!");
            sobre();
            console.log(colors.reset, "")
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,"\n\nAdicionar Jogo\n\n",colors.reset);

                console.log("Digite a plataforma do jogo: ")
                plataforma = readlinesync.question("")

                console.log("Digite o Título do jogo: ")
                titulo = readlinesync.question("")

                console.log("Digite o tipo da mídia: ")
                tipo = readlinesync.keyInSelect(tiposJogos, "", {cancel: false}) + 1

                console.log("Digite o valor do jogo (R$): ")
                valor = readlinesync.questionFloat("")

                switch(tipo) {
                    case 1:
                        console.log("Digite a quantidade em estoque: ")
                        estoque = readlinesync.questionInt("")

                        console.log("Digite o valor do Frete (R$): ")
                        frete = readlinesync.questionFloat("")

                        jogos.cadastrar(new MidiaFisica(jogos.gerarCodigo(), plataforma, titulo, valor, frete, estoque))
                        break
                    case 2:
/*                         console.log("Digite o Codigo de Ativação: ")
                        codigoAtivacao = readlinesync.question("") */
                        jogos.cadastrar(new MidiaDigital(jogos.gerarCodigo(), plataforma, titulo, valor,))
                        break
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todos os Jogos\n\n",colors.reset);

                jogos.listarTodos()

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar informações do Jogo - por codigo\n\n",colors.reset);

                console.log("Digite o codigo do Jogo")
                codigo = readlinesync.questionInt("")
                jogos.procurarPorCodigo(codigo)

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar informações do Jogo\n\n",colors.reset);

                console.log("Digite o codigo do Jogo: ")
                codigo = readlinesync.questionInt("")

                let jogo = jogos.encontrarJogoPorCodigo(codigo)

                if (jogo != null) {
                    console.log("Digite a Plataforma do Jogo")
                    plataforma = readlinesync.question("")

                    console.log("Digite o Nome do jogo: ")
                    titulo = readlinesync.question("")

                    tipo = jogo.tipo

                    console.log("\nDigite o valor do jogo (R$)")
                    valor = readlinesync.questionFloat("")

                    switch (tipo) {
                        case 1:
                            console.log("Digite a quantidade em estoque: ")
                            estoque = readlinesync.questionInt("")

                            console.log("Digite o valor do Frete (R$): ")
                            frete = readlinesync.questionFloat("")
                            
                            jogos.atualizar(new MidiaFisica(codigo, plataforma, titulo, valor, frete))
                            break
                        case 2:
                            jogos.atualizar(new MidiaDigital(codigo, plataforma, titulo, valor))
                            break
                    }
                } else {
                    console.log(colors.fg.redstrong, `\nO Jogo de Codigo: ${codigo} não foi encontrado!`, colors.reset)
                }
                
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,"\n\nRemover um Jogo do carrinho\n\n",colors.reset);

                console.log("Digite o código do Jogo: ")
                codigo = readlinesync.questionInt("")
                jogos.deletar(codigo)

                keyPress()
                break;

            case 6:
                while (true) {
                    console.log(colors.bg.blue, colors.fg.whitestrong)
                    console.log("\n############## CARRINHO ##############")
                    console.log("                                        ")
                    console.log("        1 - Listar carrinho             ")
                    console.log("        2 - Adicionar jogo ao carrinho  ")
                    console.log("        3 - Remover jogo do carrinho    ")
                    console.log("        4 - Ver total                   ")
                    console.log("        5 - Voltar                     \n")
                    console.log("########################################")
                    console.log(colors.reset)

                    console.log("Entre com a opção desejada: ");
                    let op = readlinesync.questionInt("")

                    switch (op) {
                        case 1:
                            carrinho.listar()
                            keyPress()
                            break;

                        case 2:
                            let codAdd = readlinesync.questionInt("Código do jogo: ")

                            let jogoAdd = jogos.encontrarJogoPorCodigo(codAdd)

                            if (jogoAdd) {
                                if (carrinho.adicionar(jogoAdd)) {
                                    console.log(colors.fg.greenstrong,"Adicionado ao carrinho!", colors.reset)
                                } else {
                                    console.log(colors.fg.redstrong,"Sem estoque!", colors.reset)
                                }
                            } else {
                                console.log(colors.fg.redstrong,"Jogo não encontrado!", colors.reset)
                            }

                            keyPress()
                            break

                        case 3:
                            let codRem = readlinesync.questionInt("Código do jogo: ")
                            if (carrinho.remover(codRem))
                                console.log(colors.fg.greenstrong,"Removido!", colors.reset)
                            else
                                console.log(colors.fg.redstrong, "Não encontrado no carrinho", colors.reset)

                            keyPress()
                            break

                        case 4:
                            console.log(colors.fg.yellowstrong,`Total: R$ ${carrinho.total().toFixed(2)}`, colors.reset)
                            keyPress()
                            break

                        case 5:
                            return

                        default:
                            console.log(colors.fg.redstrong, "Opção inválida!", colors.reset)
                    }
                }


            default:
                console.log(colors.fg.redstrong,"\nOpção Inválida!\n",colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n#####################################################");
    console.log("Projeto Desenvolvido por: Rafael Bernardo");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("#####################################################");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();
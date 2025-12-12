import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    // Declaração de Variáveis
    let opcao: number

    while (true) {

        console.log(colors.bg.black, colors.fg.greenstrong)
        console.log("#####################################################");
        console.log("                                                     ");
        console.log("               LOJA DA ZTEAM GAMES               ");
        console.log("                                                     ");
        console.log("#####################################################");
        console.log("                                                     ");
        console.log("            1 - Adicionar jogo                   ");
        console.log("            2 - Listar todos os jogos               ");
        console.log("            3 - Buscar jogo por número              ");
        console.log("            4 - Atualizar Dados do jogo             ");
        console.log("            5 - Apagar jogo                         ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("#####################################################");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.yellow,"\nLoja Zteam Games - Volte Sempre!");
            sobre();
            console.log(colors.reset, "")
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,"\n\nCriar Jogo\n\n",colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas os Jogos\n\n",colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar dados do Jogo - por número\n\n",colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados do Jogo\n\n",colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,"\n\nApagar um Jogo\n\n",colors.reset);

                keyPress()
                break;

            default:
                console.log(colors.fg.whitestrong,"\nOpção Inválida!\n",colors.reset);

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
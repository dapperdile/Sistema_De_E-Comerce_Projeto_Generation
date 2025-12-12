export abstract class Jogo {

    private _codigo: number
    private _plataforma: string
    private _tipo: number
    private _titulo: string
    private _valor: number

    constructor(codigo: number, plataforma: string, tipo: number, titulo: string, valor: number) {
        this._codigo = codigo
        this._plataforma = plataforma
        this._tipo = tipo
        this._titulo = titulo
        this._valor = valor
    }

    public get codigo() {
        return this._codigo
    }

    public set codigo(codigo: number) {
        this._codigo = codigo
    }
    
    public get plataforma() {
        return this._plataforma
    }

    public set plataforma(plataforma: string) {
        this._plataforma = plataforma
    }

    public get tipo() {
        return this._tipo
    }

    public set tipo(tipo: number) {
        this._tipo = tipo
    }

    public get titulo() {
        return this._titulo
    }

    public set titulo(titulo: string) {
        this._titulo = titulo
    }

    public get valor() {
        return this._valor
    }

    public set valor(valor: number) {
        this._valor = valor
    }

    public visualizar(): void {
        let tipo: string = ""

        switch (this._tipo) {
            case 1:
                tipo = "Mídia Física"
                break
            case 2:
                tipo = "Mídia Digital"
                break
        }

        console.log("\n\n############################################");
        console.log("Informações do Jogo:");
        console.log("############################################");
        console.log("Codigo do Jogo: " + this._codigo);
        console.log("Plataforma: " + this._plataforma);
        console.log("Tipo de Mídia: " + tipo);
        console.log("Titulo: " + this._titulo);
        console.log("Valor: " + this.valor.toFixed(2));
    }
}
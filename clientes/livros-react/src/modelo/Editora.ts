class Editora {
    codEditora!: number;
    nome!: string;

    constructor(codEditora: number = 0, nome: string = '') {
        this.codEditora = codEditora;
        this.nome = nome;
    }
}

export default Editora;
export { Editora };

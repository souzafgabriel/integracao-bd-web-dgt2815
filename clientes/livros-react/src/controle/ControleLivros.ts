import Livro from '../modelo/Livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

class ControleLivros {
    async obterLivros(): Promise<Array<Livro>> {
        const resposta = await fetch(baseURL);
        const dados: Array<LivroMongo> = await resposta.json();
        return dados.map((l: LivroMongo) => new Livro(
            l._id ?? '',
            l.codEditora,
            l.titulo,
            l.resumo,
            l.autores
        ));
    }

    async incluir(livro: Livro): Promise<boolean> {
        const livroMongo: LivroMongo = {
            _id: null,
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores
        };

        const resposta = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livroMongo)
        });

        return resposta.ok;
    }

    async excluir(codigo: string): Promise<boolean> {
        const resposta = await fetch(`${baseURL}/${codigo}`, {
            method: 'DELETE'
        });

        return resposta.ok;
    }
}

export default ControleLivros;
export { ControleLivros };

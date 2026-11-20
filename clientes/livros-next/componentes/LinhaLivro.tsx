import Livro from '@/classes/modelo/Livro';
import _ControleEditora from '../classes/controle/ControleEditora';
import React from 'react';

const controleEditora = new _ControleEditora();

type LinhaLivroProps = {
    livro: Livro;
    excluir(codigo: string): void;
};

function nomeEditora(editoraCodigo: number) {
    return controleEditora.getNomeEditora(editoraCodigo);
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props: LinhaLivroProps) => {
    return (
        <tr>
            <td>
                {props.livro.titulo} <br />
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => props.excluir(props.livro.codigo)}
                >
                    Excluir
                </button>
            </td>
            <td>{props.livro.resumo}</td>
            <td>{nomeEditora(props.livro.codEditora)}</td>
            <td>
                <ul>
                    {props.livro.autores.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </td>
        </tr>
    );
};

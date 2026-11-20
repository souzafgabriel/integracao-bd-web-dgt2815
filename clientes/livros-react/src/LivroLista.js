import _controleLivro from './controle/ControleLivros';
import _controleEditora from './controle/ControleEditora';
import React, { useState, useEffect } from 'react';

const controleLivro = new _controleLivro();
const controleEditora = new _controleEditora();

function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        controleLivro.obterLivros().then((dados) => {
            setLivros(dados);
            setCarregado(true);
        });
    }, [carregado]);

    function excluir(codigo) {
        controleLivro.excluir(codigo).then(() => {
            setCarregado(false);
        });
    }

    return (
        <div style={{ padding: '10px' }}>
            <h1 style={{ textAlign: 'left' }}>Catálogo de Livros</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Titulo</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {livros.map((item, index) => {
                        return <LinhaLivro key={index} livro={item} excluir={excluir} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}

class LinhaLivro extends React.Component {
    nomeEditora() {
        return controleEditora.getNomeEditora(this.props.livro.codEditora);
    }

    render() {
        const style = {
            textAlign: 'left'
        };

        return (
            <tr>
                <td>
                    {this.props.livro.titulo} <br />
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.props.excluir(this.props.livro.codigo)}
                    >
                        Excluir
                    </button>
                </td>
                <td>{this.props.livro.resumo}</td>
                <td>{this.nomeEditora()}</td>
                <td>
                    <ul>
                        {this.props.livro.autores.map((item, index) => {
                            return <li style={style} key={index}>{item}</li>;
                        })}
                    </ul>
                </td>
            </tr>
        );
    }
}

export default LivroLista;

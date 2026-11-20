import _controleLivro from './controle/ControleLivros';
import _controleEditora from './controle/ControleEditora';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Livro from './modelo/Livro';

const controleLivro = new _controleLivro();
const controleEditora = new _controleEditora();

function LivroDados() {
    const opcoes = controleEditora.getEditoras().map((editora) => {
        return { value: editora.codEditora, text: editora.nome };
    });

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0]?.value ?? 1);

    const navigate = useNavigate();

    const tratarCombo = function (evento) {
        setCodEditora(Number(evento.target.value));
    };

    const incluir = function (evento) {
        evento.preventDefault();
        const novoLivro = new Livro(
            '',
            Number(codEditora),
            titulo,
            resumo,
            autores.split('\n')
        );
        controleLivro.incluir(novoLivro).then(() => {
            navigate('/');
        });
    };

    return (
        <main style={{ textAlign: 'left', padding: '10px' }}>
            <h1 style={{ textAlign: 'left' }}>Dados do Livro</h1>

            <form onSubmit={incluir}>
                <div className="form-group mb-3">
                    <label htmlFor="titulo">Título</label>
                    <input
                        onChange={(e) => setTitulo(e.target.value)}
                        type="text"
                        className="form-control"
                        id="titulo"
                        placeholder="Título"
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="resumo">Resumo</label>
                    <textarea
                        onChange={(e) => setResumo(e.target.value)}
                        className="form-control"
                        id="resumo"
                        placeholder="Resumo"
                        rows={3}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="editora">Editora</label>
                    <select
                        className="form-control"
                        id="editora"
                        value={codEditora}
                        onChange={tratarCombo}
                    >
                        {opcoes.map((e) => {
                            return <option key={e.value} value={e.value}>{e.text}</option>;
                        })}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="autores">Autores (1 por linha)</label>
                    <textarea
                        onChange={(e) => setAutores(e.target.value)}
                        className="form-control"
                        id="autores"
                        placeholder="Autores"
                        rows={3}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Salvar dados</button>
            </form>
        </main>
    );
}

export default LivroDados;

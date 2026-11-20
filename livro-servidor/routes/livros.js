const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (err) {
        res.status(500).json({ mensagem: 'Falha ao obter livros', erro: err });
    }
});

router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        await incluir(livro);
        res.json({ mensagem: 'Livro incluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ mensagem: 'Falha ao incluir livro', erro: err });
    }
});

router.delete('/:codigo', async (req, res) => {
    try {
        const codigo = req.params.codigo;
        await excluir(codigo);
        res.json({ mensagem: 'Livro excluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ mensagem: 'Falha ao excluir livro', erro: err });
    }
});

module.exports = router;

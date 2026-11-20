const Livro = require('./livro-schema');
const banco = require('./conexao');

const obterLivros = async () => {
    return await Livro.find();
};

const incluir = async (livro) => {
    if (!livro._id) {
        livro._id = new banco.Types.ObjectId();
    }
    return await Livro.create(livro);
};

const excluir = async (codigo) => {
    return await Livro.deleteOne({ _id: codigo });
};

module.exports = { obterLivros, incluir, excluir };

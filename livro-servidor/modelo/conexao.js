const banco = require('mongoose');

const options = {};

banco.connect('mongodb://localhost:27017/livraria', options)
    .then(() => console.log('MongoDB conectado com sucesso'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = banco;

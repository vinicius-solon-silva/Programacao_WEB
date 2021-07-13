const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'teste',
    'root', 
    'root', 
    {host: 'localhost', dialect: 'mysql'}
);

// BASICAMENTE, CRIAÇÃO DE UM DATABASE E TABELA USANDO ORIENTAÇÃO A OBJETO
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }    
});

Postagem.sync({force: true}); //garante que a tabela 'postagens' seja criada no mysql

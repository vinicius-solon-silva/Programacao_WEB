const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'teste',
    'root', 
    'root', 
    {host: 'localhost', dialect: 'mysql'}
);

const Usuario = sequelize.define('usuarios', {
    nome: { type: Sequelize.STRING },
    sobrenome: { type: Sequelize.STRING },
    idade: { type: Sequelize.INTEGER },
    email: { type: Sequelize.STRING }
});

Usuario.sync({force: true});
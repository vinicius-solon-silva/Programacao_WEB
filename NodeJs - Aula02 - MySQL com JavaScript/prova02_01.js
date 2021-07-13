const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'jogos_olimpicos',
    'root', 
    'root', 
    {host: 'localhost', dialect: 'mysql'}
);

const Esporte = sequelize.define('esportes', {
    modalidade: { type: Sequelize.STRING },
    tipo: { type: Sequelize.STRING },
    distancia: { type: Sequelize.INTEGER },
    sexo: { type: Sequelize.STRING },
    local: { type: Sequelize.STRING }
});

Esporte.sync({force: true});
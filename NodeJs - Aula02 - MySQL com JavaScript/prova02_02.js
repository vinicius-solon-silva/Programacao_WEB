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
Esporte.create({
    modalidade: "Natacao",
    tipo: "Desportos Aquaticos",
    distancia: 50,
    sexo: "Masculino e Feminino",
    local: "Piscina Olimpica"
})

Esporte.create({
    modalidade: "Boxe",
    tipo: "Luta",
    distancia: 6,
    sexo: "Masculino e Feminino",
    local: "Ringue"
})

Esporte.create({
    modalidade: "Ginastica Artistica",
    tipo: "Ginastica",
    distancia: 10,
    sexo: "Feminino",
    local: "Ginasio"
})
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'teste',
    'root', 
    'root', 
    {host: 'localhost', dialect: 'mysql'}
);

const Postagem = sequelize.define('postagens', {
    titulo: { type: Sequelize.STRING },
    conteudo: { type: Sequelize.TEXT }    
});

const Usuario = sequelize.define('usuarios', {
    nome: { type: Sequelize.STRING },
    sobrenome: { type: Sequelize.STRING },
    idade: { type: Sequelize.INTEGER },
    email: { type: Sequelize.STRING }
});

Postagem.create({
    titulo: "O Senhor dos Aneis",
    conteudo: "Ai, como ouro caem as folhas ao vento, longos anos inumeráveis como as asas das árvores! Os longos anos se passaram como goles rápidos do doce hidromel em salões altos além do Oeste, sob as abóbadas azuis de Varda onde as estrelas tremem na canção de sua voz, de santa e rainha."
});

Usuario.create({
    nome: "Vinicius",
    sobrenome: "Solon Silva",
    idade: 23,
    email: "vinny@gmail.com"
});
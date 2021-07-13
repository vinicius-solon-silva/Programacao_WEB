const express = require('express');
const app = express();

// Definição de 3 rotas:
app.get('/', function(req, res){
    res.send("Seja bem-vindo a minha app!")
})

app.get('/sobre', function(req, res){
    res.send("Minha página sobre")
})

app.get('/blog', function(req, res){
    res.send("Seja bem-vindo ao meu blog!")
})

app.listen(8081, function() {
    console.log("Servidor executando na URL http://localhost:8081")
})


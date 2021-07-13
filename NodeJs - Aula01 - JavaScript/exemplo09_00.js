const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Seja bem-vindo a minha app!")
})

app.get('/sobre', function(req, res){
    res.send("Minha página sobre")
})

app.get('/blog', function(req, res){
    res.send("Seja bem-vindo ao meu blog!")
})

app.get('/ola/:nome/:cargo/:cor', function(req, res){
    //A função "send" só pode ser chamada uma vez.
    res.send(req.params)
})

app.listen(8081, function() {
    console.log("Servidor executando na URL http://localhost:8081")
})


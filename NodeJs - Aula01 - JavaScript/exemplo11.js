const express = require('express');
const app = express();

app.get('/', function(req, res){
    /*
        __dirname: obtém o caminho da aplicação
        "C:\User\usuario\WorkspaceNode\Js\Aula01".
    */
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/html/sobre.html')
})

app.listen(8081, function() {
    console.log("Servidor executando na URL http://localhost:8081")
})

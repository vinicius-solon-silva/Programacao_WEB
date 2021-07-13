var http = require("http");

/*
    A função "createServer" tem uma outra função chamada de callback (função que é executada sempre
    que um evento acontece), que recebe 2 parâmetros (requisição e resposta).
*/

http.createServer(function (req, res){
    // A função "end" serve para enviar uma msg.
    res.end("Hello World! Welcome to my website!")
}).listen(8081)
console.log("Server executando...")
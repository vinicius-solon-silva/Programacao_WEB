// FRAMEWORK EXPRESS
// Carrega o módulo "express", que faz parte do Node.
const express = require('express');

/*
    A função "express", que vem do módulo "express", cria uma
    instância, ou seja, uma cópia inteira do framework "express"
    para a constante "app".
*/

const app = express();

/* 
    Comando suficiente para deixar o servidor executando, mas, tem
    que ser a última linha do código e executar uma função callback.
*/

app.listen(8081, function() {
    console.log("Servidor executando na URL http://localhost:8081")
})


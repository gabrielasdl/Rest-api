const express = require('express');
const app = express();    //criando uma instancia do express
const rotaProdutos = require('./routes/produtos');  // chamando o arquivo de rotas

app.use('/teste', (req, resp, next) => {   // /teste serve para criar as rotas
    resp.status(200).send({   // se o status code for 200, então mostra a mensagem que deu certo.
        mensagem: 'Ok, deu tudo certo.' 
    });
});

module.exports = app;   //utilizado para exportar 

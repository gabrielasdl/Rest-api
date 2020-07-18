const http = require('http');   //importando o HTTP para o projeto
const app = require('./app');  // importando o a variavel app do arquivo app.js
const port = process.env.PORT || 3000;   // armazena a porta do serviço 
const server = http.createServer(app);   //passa pro server todo o conteudo que esta no app.js
server.listen(port);
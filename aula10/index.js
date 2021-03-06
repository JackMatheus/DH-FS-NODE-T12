const express = require('express');

// criando aplicacao express
const app = express();

// importando rotas da aplicacao
const routes = require("./routes/routes");

// indicando que a aplicacao ira trabalhar com as rotas
//  0 0000
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor rodando na porta: 3000")
});
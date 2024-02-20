const express = require('express');
const app = express();
const produtoRouter = require('./src/model/produto/produto.router')
app.use(express.json());

app.use('/produtos', produtoRouter);

app.listen(8080, () => {
  console.log('Servidor funcionando')
})
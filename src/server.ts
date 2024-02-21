import * as express from 'express';
import produtoRouter from './model/produto/produto.router';
const app = express();
app.use(express.json());

app.use('/produtos', produtoRouter);

app.listen(8080, () => {
  console.log('Servidor funcionando')
})
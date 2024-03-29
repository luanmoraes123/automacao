import {Request, Response} from 'express'
import * as express from 'express';
import ProdutoFactory from './produto.factory';

const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  const data = await ProdutoFactory.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await ProdutoFactory.store(req.body);
  return res.status(200).json({ data });
});

export default  router;
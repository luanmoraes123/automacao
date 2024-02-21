import knex from '../../service/knex';
import {Produto, ProdutoCreate} from './produto.d'

export const getAll = (): Promise<Produto[] | []> => {
  return knex('produtos').select();
}

export const store = (params: ProdutoCreate) => {
  return knex('produtos').insert(params);
}


import knex from '../../service/knex';

export const getAll = () => {
  return knex('produtos').select();
}

export const store = (params) => {
  return knex('produtos').insert(params);
}


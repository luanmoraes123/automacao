const knex = require('../../service/knex');

const getAll = () => {
  return knex('produtos').select();
}

const store = (params) => {
  return knex('produtos').insert(params);
}

module.exports = {
  getAll,
  store
}
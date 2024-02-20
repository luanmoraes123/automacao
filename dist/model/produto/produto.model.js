var knex = require('../../service/knex');
var getAll = function () {
    return knex('produtos').select();
};
var store = function (params) {
    return knex('produtos').insert(params);
};
module.exports = {
    getAll: getAll,
    store: store
};

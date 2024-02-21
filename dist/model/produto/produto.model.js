"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.getAll = void 0;
var knex_1 = require("../../service/knex");
var getAll = function () {
    return (0, knex_1.default)('produtos').select();
};
exports.getAll = getAll;
var store = function (params) {
    return (0, knex_1.default)('produtos').insert(params);
};
exports.store = store;

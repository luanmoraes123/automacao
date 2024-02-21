"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var produto_router_1 = require("./model/produto/produto.router");
var app = express();
app.use(express.json());
app.use('/produtos', produto_router_1.default);
app.listen(8080, function () {
    console.log('Servidor funcionando');
});

// 商品信息路由
const goods = require("express").Router();

goods.get("/getGoods", require("./goods/getGoods"));
goods.post("/add", require("./goods/add"));

module.exports = goods;

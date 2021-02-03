// 商品信息路由
const goods = require("express").Router();

//获取全部商品
goods.get("/getGoods", require("./goods/getGoods"));
// 添加商品
goods.post("/add", require("./goods/add"));

//获取特定ID 的商品
goods.post("/getGoodsByID", require("./goods/getGoodsByID"));
module.exports = goods;

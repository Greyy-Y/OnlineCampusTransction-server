// 我的路由
const mypublished = require("express").Router();

//获取我发布的商品
goods.post("/getMpgoods", require("./mypublished/getMpgoods"));

//获取我发布的求购
goods.post("/getMwGoods", require("./mypublished/getMwGoods"));
module.exports = mypublished;

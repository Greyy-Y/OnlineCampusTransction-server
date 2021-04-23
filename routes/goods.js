// 商品信息路由
const goods = require("express").Router();

//获取全部商品
goods.get("/getGoods", require("./goods/getGoods"));
// 添加商品
goods.post("/add", require("./goods/add"));
//获取特定ID 的商品
goods.post("/getGoodsByID", require("./goods/getGoodsByID"));
//浏览量+1
goods.post("/addViewed", require("./goods/addViewed"));
// 对商品评论
goods.post("/comment", require("./goods/comment"));
//获取商品评论
goods.post("/getComment", require("./goods/getComment"));
// 按类别查询商品
goods.post("/findByCate", require("./goods/findByCate"));
// 更新发布的商品
goods.post("/editMyGood", require("./goods/editMyGood"));
// 模糊查询商品
goods.post("/getGoodsByName", require("./goods/getGoodsByName"));

goods.post("/removeById", require("./goods/removeById"));

goods.post("/changeDisplay", require("./goods/changeDisplay"));
goods.post("/changeState", require("./goods/changeState"));
module.exports = goods;

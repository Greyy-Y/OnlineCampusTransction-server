const recommend = require("express").Router();
// 获取推荐商品
recommend.get("/getRecommend", require("./recommend/getRecommend"));
// 获取精选商品
recommend.get("/getFeatured", require("./recommend/getFeatured"));
// 添加 推荐
recommend.post("/add", require("./recommend/add"));

module.exports = recommend;

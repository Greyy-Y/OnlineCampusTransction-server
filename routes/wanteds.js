// 求购信息路由
const wanteds = require("express").Router();

//获取全部求购信息
wanteds.get("/getWanteds", require("./wanteds/getWanteds"));
// 添加商品
wanteds.post("/add", require("./wanteds/add"));

module.exports = wanteds;

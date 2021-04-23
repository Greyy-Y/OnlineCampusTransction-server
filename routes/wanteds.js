// 求购信息路由
const wanteds = require("express").Router();

//获取全部求购信息
wanteds.get("/getWanteds", require("./wanteds/getWanteds"));
// 添加求购
wanteds.post("/add", require("./wanteds/add"));
// 删除求购
wanteds.post("/delete", require("./wanteds/delete"));
// 更改上架状态
wanteds.post("/changeDisplay", require("./wanteds/changeDisplay"));
// 更改审核状态
wanteds.post("/changeState", require("./wanteds/changeState"));

module.exports = wanteds;

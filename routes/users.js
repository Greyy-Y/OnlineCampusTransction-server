// 用户信息路由
const users = require("express").Router();
//注册用户
users.post("/add", require("./users/add"));
//更新用户资料
users.post("/update", require("./users/update"));
//新增我的求购
users.post("/addWanted", require("./users/addWanted"));
//获取我的求购
users.post("/getMyWanted", require("./users/getMyWanted"));
//获取我的商品
users.post("/getMyGoods", require("./users/getMyGoods"));
//新增我的商品
users.post("/addGood", require("./users/addGood"));
//获取我的购物车
users.post("/getMyCart", require("./users/getMyCart"));
//加入我的购物车
users.post("/addToCart", require("./users/addToCart"));
//从我的购物车中移除
users.post("/removeGoodFromCart", require("./users/removeGoodFromCart"));
//更新我的购物车
users.post("/updateMyCart", require("./users/updateMyCart"));
//清空我的购物车
users.post("/emptyMyCart", require("./users/emptyMyCart"));

module.exports = users;

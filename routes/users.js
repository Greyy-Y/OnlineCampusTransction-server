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
//删除我的求购
users.post("/deleteWanted", require("./users/deleteWanted"));
//获取我的商品
users.post("/getMyGoods", require("./users/getMyGoods"));
//新增我的商品
users.post("/addGood", require("./users/addGood"));
// 从我发布的商品中获取特定ID的商品
users.post("/getMyGoodById", require("./users/getMyGoodById"));
// 删除我的商品
users.post("/deleteReleaseGood", require("./users/deleteReleaseGood"));
//获取我的购物车
users.post("/getMyCart", require("./users/getMyCart"));
//加入我的购物车
users.post("/addToCart", require("./users/addToCart"));
//从我的购物车中移除
users.post("/removeGoodFromCart", require("./users/removeGoodFromCart"));
//从我的购物车中移除
users.post("/removeGoodsFromCart", require("./users/removeGoodsFromCart"));
//更新我的购物车
users.post("/updateMyCart", require("./users/updateMyCart"));
//清空我的购物车
users.post("/emptyMyCart", require("./users/emptyMyCart"));
// 新增收货地址
users.post("/addAddress", require("./users/addAddress"));
//获取我的地址
users.post("/getAddress", require("./users/getAddress"));
//删除地址
users.post("/deleteAddress", require("./users/deleteAddress"));
//通过地址ID修改地址
users.post("/updateAddress", require("./users/updateAddress"));

users.get("/getUsers", require("./users/getUsers"));

users.post("/deleteUserById", require("./users/deleteUserById"));
module.exports = users;

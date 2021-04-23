// 商品信息路由
const orders = require("express").Router();

//获取全部订单
orders.get("/getOrders", require("./orders/getOrders"));
// 创建订单
orders.post("/create", require("./orders/create"));
//获取我的订单
orders.post("/getMyOrder", require("./orders/getMyOrder"));
//删除我的订单
orders.post("/deleteMyOrder", require("./orders/deleteMyOrder"));
//通过id查询订单
orders.post("/getOrderById", require("./orders/getOrderById"));
// 支付订单
orders.post("/orderPayed", require("./orders/orderPayed"));
// 管理员更改订单状态
orders.post("/editOrder", require("./orders/editOrder"));
// 管理员更改订单地址
orders.post("/editOrderAddress", require("./orders/editOrderAddress"));
// 卖家发货
orders.post("/sendGood", require("./orders/sendGood"));

module.exports = orders;

const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		uid: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		orderTime: {
			type: Date,
			default: Date.now,
		},
		payType: {
			//1 wepay 2paypal
			type: Number,
			enum: [1, 2],
		},
		payStaus: {
			// 0未付款  1 已付款
			type: Number,
			enum: [0, 1],
		},
		address: {
			type: String,
		},
		totalPrice: {
			type: Number,
		},
		// 订单状态 0 未付款 1已付款 2 已完成
		state: {
			type: Number,
			enum: [0, 1, 2],
		},
	},
	{
		timestarp: true,
		versonKey: false,
	}
);

//order集合
const Orders = mongoose.model("Orders", orderSchema);

module.exports = { Orders };

const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		uid: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		goods: [
			{
				good: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Goods",
				},
				count: {
					type: Number,
				},
				// 发货状态
				state: {
					type: Number,
					enum: [0, 1],
					default: 0,
					require: true,
				},
			},
		],
		orderTime: {
			type: Number,
			default: Date.now,
		},
		payType: {
			//1 wepay 2paypal
			type: Number,
			enum: [1, 2],
		},
		payStatus: {
			// 0未付款  1 已付款
			type: Number,
			enum: [0, 1],
			default: 0,
		},
		address: [
			{
				receiver: {
					type: String,
					required: true,
				},
				detailAdd: {
					type: String,
					required: true,
				},
				phone: {
					type: String,
					required: true,
				},
			},
		],
		totalPrice: {
			type: Number,
		},
		// 订单状态 0 未付款 1已付款 2 已发货 3 确认收货 4 交易完成
		state: {
			type: Number,
			enum: [0, 1, 2, 3, 4],
			default: 0,
			require: true,
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

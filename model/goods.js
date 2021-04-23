const mongoose = require("mongoose");

// 信息验证模块
const Joi = require("joi");

//创建商品集合规则
const goodsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			minlength: 1,
			maxlength: 40,
			required: true,
		},
		//发布商品的用户id
		uid: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		originPrice: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		pic: {
			type: Array,
			// required: true,
		},
		//几成新
		new: {
			type: Number,
			required: true,
		},
		count: {
			type: Number,
			min: 1,
			max: 999,
			default: 1,
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
			required: true,
		},
		desc: {
			type: String,
			maxlength: 200,
		},
		modifyTime: {
			type: Number,
			default: Date.now,
		},
		viewed: {
			type: Number,
			default: 0,
		},
		sale: {
			type: Number,
			default: 0,
		},
		comment: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
					required: true,
				},
				content: {
					type: String,
					maxlength: 200,
					required: true,
				},
				createdAt: {
					type: Number,
					default: Date.now,
				},
				rate: {
					type: Number,
					enum: [1, 2, 3, 4, 5],
				},
			},
		],
		/*发布商品的状态
   0---未过审
   1---审核中
   2---已过审
  */
		state: {
			type: Number,
			enum: [0, 1, 2],
			default: 1,
		},
		display: {
			type: Boolean,
			default: false,
		},
	},
	{ versionKey: false, timestamps: true }
);

const Goods = mongoose.model("Goods", goodsSchema);
// 商品信息校验

// Goods.create(
// 	{
// 		name: "AirPodsPro",
// 		uid: "600ae6d084697d099432a76f",
// 		originPrice: "1999",
// 		price: "999",
// 		new: 7,
// 		count: 2,
// 		category: "6010df758ad60f11f4cd7254",
// 		desc: "开创真无线降噪耳机的划时代产品",
// 	},
// 	function (err, res) {
// 		if (err) console.log(err);
// 		console.log(res);
// 	}
// );
// Goods.find()
// 	.populate("uid")
// 	.then((res) => console.log(res));

module.exports = {
	Goods,
};

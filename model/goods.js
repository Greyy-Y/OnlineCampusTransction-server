const mongoose = require("mongoose");

// 信息验证模块
const joi = require("joi");
const { number } = require("joi");

//创建商品集合规则
const goodsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			minlength: 2,
			maxlength: 40,
			required: true,
		},
		//发布商品的用户id
		uid: {
			// type: mongoose.Schema.Types.ObjectId,
			// ref:"User",
			type: String,
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
			maxlength: 100,
		},
		modifyTime: {
			type: Number,
			default: Date.now,
		},
		viewed: {
			type: Number,
			default: 0,
		},
	},
	{ versionKey: false }
);

const Goods = mongoose.model("Goods", goodsSchema);

module.exports = {
	Goods,
};

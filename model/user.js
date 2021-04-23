const mongoose = require("mongoose");

const bcryptjs = require("bcryptjs");

const Joi = require("joi");

//创建用户集合规则
const userSchema = mongoose.Schema(
	{
		nickName: {
			type: String,
			minlength: 2,
			maxlength: 16,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		sex: {
			type: String,
			enum: ["男", "女", "未知"],
			default: "未知",
		},
		role: {
			type: String,
			default: "normal",
			enum: ["normal", "admin"],
			require: true,
		},
		avatar: {
			type: String,
			default: "/uploads/default-avatar.jpg",
		},
		realName: {
			type: String,
		},
		signature: {
			type: String,
		},
		createdTime: {
			type: Date,
			default: Date.now,
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
		cart: [
			{
				good: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Goods",
				},
				count: {
					type: Number,
					default: 1,
				},
			},
		],
		myWanteds: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Wanteds",
			},
		],
		myGoods: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Goods",
			},
		],
	},
	{ versonKey: "false" }
);

//user集合
const User = mongoose.model("User", userSchema);

// 注册数据验证
const validateUser = (user) => {
	const schema = Joi.object({
		nickName: Joi.string().min(2).max(16).required().error(new Error("用户名应为2~16个字符")),
		email: Joi.string()
			.regex(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/)
			.required()
			.error(new Error("邮箱格式有误")),
		password: Joi.string()
			.required()
			.regex(/^[a-zA-Z0-9]{6,20}$/)
			.erroe(new Error("密码应为6~20位数字字母的组合")),
		role: Joi.string().valid("normal", "admin"),
	});
	return schema.validateAsync(user, {
		//检测所有错误
		abortEarly: false,
		//允许对象包含被忽略的未知键
		allowUnknown: true,
	});
};

//登录数据格式校验
const validateLogin = (user) => {
	//定义对象验证规则
	const schema = Joi.object({
		email: Joi.string()
			.regex(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/)
			.required()
			.error(new Error("邮箱格式错误")),
		password: Joi.string()
			.regex(/^[a-zA-Z0-9]{6,20}$/)
			.error(new Error("密码格式错误")),
	});
	//验证
	return schema.validateAsync(user, {
		//检测到错误立即返回
		abortEarly: true,
	});
};

module.exports = {
	User,
	validateUser,
	validateLogin,
};

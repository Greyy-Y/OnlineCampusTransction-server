const mongoose = require("mongoose");
//创建用户集合规则
const adminSchema = mongoose.Schema(
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
		avatar: {
			type: String,
			default: "/uploads/default-avatar.jpg",
		},
		realName: {
			type: String,
		},
		state: {
			type: Boolean,
			default: true,
		},
		createdTime: {
			type: Date,
			default: Date.now,
		},
	},
	{ versonKey: "false" }
);

//user集合
const Admin = mongoose.model("Admin", adminSchema);
module.exports = {
	Admin,
};

const { User } = require("../model/user");
//hash密码
const bcryptjs = require("bcryptjs");

// const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
	let data = req.fields;
	// 如果用户已存在
	let user = await User.findOne({
		email: data.email,
	});
	if (user) {
		res.send({ message: "该邮箱已被注册", status: 401 });
		return;
	}
	// 加密密码
	const salt = await bcryptjs.genSalt(10);
	data.password = await bcryptjs.hash(data.password, salt);

	user = new User(data);
	await user.save(function (err) {
		if (err) {
			console.log(err);
		}
	});

	res.json({
		user,
		msg: "注册成功",
		status: 201,
	});
};

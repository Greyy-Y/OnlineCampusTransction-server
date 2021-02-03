const { User } = require("../model/user");
//hash密码
const bcryptjs = require("bcryptjs");

const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
	let data = req.fields;
	console.log(req.fields);
	let user = await User.findOne({
		email: data.email,
	});
	console.log(user);
	// 如果用户不存在
	if (!user) {
		res.send({ message: "邮箱不存在", status: 400 });
		return;
	}

	// 如果用户存在 验证密码 返回布尔值
	const validPassword = await bcryptjs.compare(data.password, user.password);
	if (!validPassword) {
		res.send({ message: "邮箱或者密码有误", status: 400 });
		return;
	}
	res.json({
		// token: jwt.sign({ email: user.email }, "abc", {
		// 	expiresIn: "3000s",
		// }),
		user: {
			id: user._id,
			email: user.email,
			nickName: user.nickName,
			role: user.role,
		},
		msg: "登录成功",
		status: 200,
	});
};

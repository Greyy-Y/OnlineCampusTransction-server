const { Admin } = require("../../model/admin");
//hash密码
const bcryptjs = require("bcryptjs");

module.exports = async (req, res) => {
	let data = req.fields;
	let admin = await Admin.findOne({
		email: data.email,
	});
	// 如果用户不存在
	if (!admin) {
		res.send({ message: "邮箱不存在", status: 400 });
		return;
	}

	// 如果用户存在 验证密码 返回布尔值
	const validPassword = await bcryptjs.compare(data.password, admin.password);
	if (!validPassword) {
		res.send({ message: "邮箱或者密码有误", status: 400 });
		return;
	}
	res.json({
		// token: jwt.sign({ email: user.email }, "abc", {
		// 	expiresIn: "3000s",
		// }),
		admin: {
			id: admin._id,
			nickName: admin.nickName,
		},
		msg: "登录成功",
		status: 200,
	});
};

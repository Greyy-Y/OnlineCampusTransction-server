const { Admin } = require("../../model/admin");
//hash密码
const bcryptjs = require("bcryptjs");

module.exports = async (req, res) => {
	let data = req.fields;
	// 如果用户已存在;
	let admin = await Admin.findOne({
		email: data.email,
	});
	if (admin) {
		res.send({ message: "该邮箱已被注册", status: 401 });
		return;
	}
	// 加密密码
	const salt = await bcryptjs.genSalt(10);
	data.password = await bcryptjs.hash(data.password, salt);

	admin = new Admin(data);
	await admin.save(function (err) {
		if (err) {
			console.log(err);
		}
	});

	res.json({
		admin,
		message: "注册成功",
		status: 201,
	});

};

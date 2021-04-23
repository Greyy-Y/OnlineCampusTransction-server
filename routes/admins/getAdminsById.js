const { Admin } = require("../../model/admin");
module.exports = async (req, res) => {
	let data = req.fields;
	let admin = await Admin.find({ _id: data.aid });
	if (!admin) {
		return res.send({ message: "该管理员不存在" });
	}
	res.json({
		status: 200,
		msg: "ok",
		admin,
	});
};

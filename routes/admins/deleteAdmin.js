const { Admin } = require("../../model/admin");
module.exports = async (req, res) => {
	await Admin.deleteOne({ _id: req.fields.aid });
	res.json({
		status: 200,
		message: "成功删除",
	});
};

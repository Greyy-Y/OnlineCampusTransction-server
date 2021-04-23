const { Goods } = require("../../model/goods");
module.exports = async (req, res) => {
	await Goods.deleteOne({ _id: req.fields.gid });
	res.json({
		status: 200,
		message: "成功删除",
	});
};

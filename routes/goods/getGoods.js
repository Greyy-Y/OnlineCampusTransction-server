const { Goods } = require("../../model/goods");
module.exports = async (req, res) => {
	let data = await Goods.find().populate("category");
	res.json({
		status: 200,
		msg: "ok",
		data,
	});
};

const { Goods } = require("../../model/goods");
// test ok
module.exports = async (req, res) => {
	let data = await Goods.find();
	res.json({
		status: 200,
		msg: "ok",
		data,
	});
};

const { Goods } = require("../../model/goods");
module.exports = async (req, res) => {
	console.log(req.fields.value);
	let reg = new RegExp(req.fields.value, "i");
	let good = await Goods.find({ name: reg }).populate("uid");
	if (!good) {
		return res.send({ message: "该商品不存在" });
	}
	res.json({
		status: 200,
		msg: "ok",
		good,
	});
};

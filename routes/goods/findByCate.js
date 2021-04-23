const { Goods } = require("../../model/goods");

module.exports = async (req, res) => {
	let data = req.fields;
	let good = await Goods.find({ category: data.cateID });
	if (!good) {
		return res.send({ message: "该商品不存在" });
	}
	res.json({
		status: 200,
		msg: "ok",
		good,
	});
};

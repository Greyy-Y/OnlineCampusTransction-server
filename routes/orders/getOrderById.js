const { Orders } = require("../../model/orders");

module.exports = async (req, res) => {
	let data = req.fields;
	let order = await Orders.find({ _id: data.oid }).populate("goods.good");
	if (!order) {
		return res.send({ message: "该订单不存在" });
	}
	res.json({
		status: 200,
		msg: "ok",
		order,
	});
};

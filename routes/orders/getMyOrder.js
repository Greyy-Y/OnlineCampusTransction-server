const { Orders } = require("../../model/orders");
module.exports = async (req, res) => {
	let data = await Orders.find({ uid: req.fields.uid }).populate("goods.good");
	res.json({
		status: 200,
		message: "获取订单成功",
		data,
	});
};

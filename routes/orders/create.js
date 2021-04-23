const { Orders } = require("../../model/orders");

module.exports = async (req, res) => {
	// 创建订单
	let data = req.fields;
	console.log(data);
	let order = new Orders(data);
	await order.save();
	// 响应
	res.json({
		order,
		message: "订单创建成功",
		stauts: 201,
	});
};

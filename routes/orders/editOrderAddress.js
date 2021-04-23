const { Orders } = require("../../model/orders");

module.exports = async (req, res) => {
	let data = req.fields;
	console.log(data);
	let order = await Orders.findOne({
		_id: data.oid,
	});
	console.log(order);
	order.address[0].receiver = data.receiver;
	order.address[0].detailAdd = data.detailAdd;
	order.address[0].phone = data.phone;
	order.save();
	res.json({
		status: 200,
		message: "已更新订单状态！",
	});
};

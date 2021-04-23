const { Orders } = require("../../model/orders");
module.exports = async (req, res) => {
	let data = await Orders.find();
	res.json({
		status: 200,
		msg: "ok",
		data,
	});
};

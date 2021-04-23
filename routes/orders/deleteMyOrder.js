const { Orders } = require("../../model/orders");
module.exports = async (req, res) => {
	await Orders.deleteOne({ _id: req.fields.oid });
	res.json({
		status: 200,
		messag: "delete ok",
	});
};

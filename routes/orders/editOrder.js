const { Orders } = require("../../model/orders");

module.exports = async (req, res) => {
	let data = req.fields;
	let good = await Orders.updateOne(
		{
			_id: data.id,
		},
		{
			payStatus: data.payStatus === null ? 1 : data.payStatus,
			state: data.state === null ? 1 : data.state,
		},
		function (err, data) {
			if (err) {
				console.log(err);
				res.json({
					status: 500,
				});
			}
			res.json({
				status: 200,
				message: "已更新订单状态！",
			});
		}
	);
};

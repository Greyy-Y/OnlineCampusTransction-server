const { Orders } = require("../../model/orders");

module.exports = async (req, res) => {
	console.log(req.fields);
	let data = req.fields;
	let good = await Orders.findOneAndUpdate(
		{
			_id: data.oid,
			goods: {
				$elemMatch: { good: data.gid },
			},
		},
		{
			$set: {
				"goods.$.state": 1,
			},
		},

		function (err, data) {
			if (err) {
				console.log(err);
				res.json({
					status: 500,
				});
			}
			res.json({
				data,
				status: 200,
				message: "已更新商品状态！",
			});
		}
	);
};

const { Goods } = require("../../model/goods");

module.exports = async (req, res) => {
	let data = req.fields;
	let good = await Goods.updateOne(
		{
			_id: data.gid,
		},
		{
			state: data.val,
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
				message: "已变更商品状态！",
			});
		}
	);
};

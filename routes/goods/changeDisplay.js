const { Goods } = require("../../model/goods");

module.exports = async (req, res) => {
	let data = req.fields.gid;
	let good = await Goods.findOneAndUpdate(
		{
			_id: data.id,
		},
		{
			display: data.isDisplay,
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
				message: "已变更商品显示状态！",
			});
		}
	);
};

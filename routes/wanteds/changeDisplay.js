const { Wanteds } = require("../../model/wanteds");

module.exports = async (req, res) => {
	let data = req.fields.wid;
	let wanted = await Wanteds.findOneAndUpdate(
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

const { Wanteds } = require("../../model/wanteds");

module.exports = async (req, res) => {
	let data = req.fields;
	let wanted = await Wanteds.updateOne(
		{
			_id: data.wid,
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

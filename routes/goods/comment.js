const { Goods } = require("../../model/goods");

module.exports = async (req, res) => {
	let data = req.fields;
	let good = await Goods.updateOne(
		{
			_id: data.gid,
		},
		{
			$addToSet: {
				comment: {
					user: data.uid,
					content: data.content,
					rate: data.rate,
				},
			},
		},

		function (err, data) {
			if (err) {
				console.log(err);
			}
			res.send({ message: "评论成功", status: 200 });
		}
	);
};

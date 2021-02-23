const { Goods } = require("../../model/goods");

module.exports = async (req, res) => {
	let good = await Goods.updateOne(
		{
			_id: req.fields.gid,
		},
		{ $inc: { viewed: 0.5 } },
		function (err) {
			if (err) return console.log(err);
			res.json({ status: "ok" });
		}
	);
};

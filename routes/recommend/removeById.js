const { Recommend } = require("../../model/recommend");

module.exports = async (req, res) => {
	console.log(req.fields.gid);
	await Recommend.deleteOne({ _id: req.fields.gid }, function (err) {
		if (err) {
			console.log(err);
		}
		res.json({
			status: 200,
			message: "成功移除该推荐商品",
		});
	});
};

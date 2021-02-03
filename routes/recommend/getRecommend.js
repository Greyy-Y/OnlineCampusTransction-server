const { Recommend } = require("../../model/recommend");

module.exports = async (req, res) => {
	let data = await Recommend.find({ type: 0 }).populate("good");
	res.json({
		status: 200,
		msg: "成功获取推荐商品",
		data,
	});
};

const { Recommend } = require("../../model/recommend");

module.exports = async (req, res) => {
	let data = await Recommend.find({ type: 1 }).populate("good");
	res.json({
		status: 200,
		msg: "成功获取精选商品",
		data,
	});
};

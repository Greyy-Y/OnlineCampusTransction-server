const { Recommend } = require("../../model/recommend");

module.exports = async (req, res) => {
	// 创建商品
	let data = req.fields;
	let recommend = new Recommend(data);
	await recommend.save();
	//响应
	res.json({
		recommend,
		message: data.type === 0 ? "成功设为推荐" : "成功设为精选",
		stauts: 201,
	});
};

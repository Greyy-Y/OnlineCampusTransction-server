const { Recommend } = require("../../model/recommend");

module.exports = async (req, res) => {
	// 创建商品
	let data = req.fields;
	console.log(data);

	let recommend1 = await Recommend.findOne({
		goood: data.good,
	});
	if (recommend1) {
		res.send({ message: "该商品已设为推荐商品", status: 401 });
		return;
	}
	let recommend = new Recommend(data);
	await recommend.save(function (err) {
		if (err) {
			console.log(err);
		}
	});
	//响应
	res.json({
		recommend,
		message: data.type === 0 ? "成功设为推荐" : "成功设为精选",
		status: 200,
	});
};

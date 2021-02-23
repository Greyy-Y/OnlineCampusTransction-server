const { Goods } = require("../../model/goods");

module.exports = async (req, res) => {
	// 数据校验
	// 创建商品
	let data = req.fields;
	let goods = new Goods(data);
	await goods.save();
	// 响应
	res.json({
		goods,
		message: "商品发布成功",
		stauts: 201,
	});
};

const { Wanteds } = require("../../model/wanteds");
const { MyPublished } = require("../../model/(Delete)mypublished");

module.exports = async (req, res) => {
	// 数据校验
	// 创建商品
	let data = req.fields;
	let wanteds = new Wanteds(data);
	await wanteds.save();
	// 响应
	res.json({
		wanteds,
		message: "求购发布成功",
		stauts: 201,
	});
};

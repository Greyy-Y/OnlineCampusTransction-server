const { Notice } = require("../../model/notice");

module.exports = async (req, res) => {
	// 创建消息
	let data = req.fields;
	console.log(data);
	let notice = new Notice(data);
	await notice.save();
	// 响应
	res.json({
		// notice,
		message: "订单创建成功",
		stauts: 201,
	});
};

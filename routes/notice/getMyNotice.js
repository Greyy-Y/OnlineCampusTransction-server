const { Notice } = require("../../model/notice");
module.exports = async (req, res) => {
	let data = await Notice.find({ sellerId: req.fields.sellerId }).populate("good").populate("orderId").populate("_id");
	res.json({
		status: 200,
		message: "获取消息成功",
		data,
	});
};

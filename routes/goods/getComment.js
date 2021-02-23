const { Goods } = require("../../model/goods");

module.exports = async (req, res) => {
	let data = req.fields;
	let comment = await Goods.find({ _id: data.gid }, { comment: 1, rate: 1 }).populate("comment.user");
	if (!comment) {
		return res.send({ message: "该商品不存在" });
	}
	res.json({
		status: 200,
		msg: "ok",
		comment,
	});
};

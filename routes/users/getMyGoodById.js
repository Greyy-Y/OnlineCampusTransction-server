const { User } = require("../../model/user");
module.exports = async (req, res) => {
	let data = await User.findOne({ _id: req.fields.uid }, { myGoods: req.fields.goodId }).populate("myGoods");
	res.json({
		status: 200,
		msg: "ok",
		data,
	});
};

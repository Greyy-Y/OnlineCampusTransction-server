const { User } = require("../../model/user");
module.exports = async (req, res) => {
	let data = await User.find({ _id: req.fields.uid }, { myGoods: 1 }).populate("myGoods");
	res.json({
		status: 200,
		msg: "ok",
		data,
	});
};

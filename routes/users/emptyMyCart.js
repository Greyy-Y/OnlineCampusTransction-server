const { User } = require("../../model/user");
module.exports = async (req, res) => {
	let data = await User.findOneAndUpdate({ _id: req.fields.uid }, { $unset: { cart: 1 } });
	res.json({
		status: 200,
		msg: "已清空购物车！",
	});
};

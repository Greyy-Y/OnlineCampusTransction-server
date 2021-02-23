const { User } = require("../../model/user");
module.exports = async (req, res) => {
	let data = await User.find({ _id: req.fields.uid }, { cart: 1 }).populate("cart.good");
	let cart_len = data[0].cart.length;
	res.json({
		status: 200,
		msg: "获取我的购物车成功",
		data,
		cart_len,
	});
};
	
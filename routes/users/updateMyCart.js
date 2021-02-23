const { User } = require("../../model/user");
module.exports = async (req, res) => {
	let data = req.fields;
	let cart = await User.findOneAndUpdate(
		{
			_id: data.uid,
			cart: {
				$elemMatch: { good: data.goodId },
			},
		},
		{
			$set: {
				"cart.$.count": data.count,
			},
		}
	);
	res.json({
		status: 200,
		msg: "修改购物车商品数量成功",
		cart: cart.cart,
	});
};

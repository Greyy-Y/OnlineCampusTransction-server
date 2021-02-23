const { User } = require("../../model/user");

module.exports = async (req, res) => {
	let data = req.fields;
	let user = await User.findOneAndUpdate(
		{
			_id: data.uid,
		},
		{
			$addToSet: {
				cart: { good: data.goodId, count: data.count },
			},
		},
		function (err) {
			if (err) return console.log(err);
		}
	);
	res.json({
		msg: "成功加入购物车",
		status: 200,
		user,
	});
};

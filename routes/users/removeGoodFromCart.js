const { User } = require("../../model/user");

module.exports = async (req, res) => {
	let data = req.fields;
	console.log(data.goodId);
	let user = await User.findOneAndUpdate(
		{
			_id: data.uid,
		},
		{
			$pull: {
				cart: { good: { $in: data.goodId } },
			},
		},
		function (err) {
			if (err) return console.log(err);
		}
	);		
	res.json({
		msg: "成功从购物车中移除",
		status: 201,
		user,
	});
};

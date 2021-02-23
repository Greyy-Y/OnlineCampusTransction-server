const { User } = require("../../model/user");

module.exports = async (req, res) => {
	let data = req.fields;
	console.log(data);
	let user = await User.findOneAndUpdate(
		{
			_id: data.uid,
		},
		{
			$addToSet: {
				myGoods: data.goodId,
			},
		},
		function (err) {
			if (err) return console.log(err);
			res.json({
				msg: "成功更新",
				status: 201,
			});
		}
	);
	console.log(user);
};
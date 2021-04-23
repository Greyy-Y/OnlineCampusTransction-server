const { User } = require("../../model/user");

module.exports = async (req, res) => {
	let data = req.fields;
	let user = await User.findOneAndUpdate(
		{
			_id: data.uid,
		},
		{
			$pull: {
				myGoods: data.goodId,
			},
		},
		function (err) {
			if (err) return console.log(err);
		}
	);
	if (user) {
		res.json({
			msg: "成功删除该商品！",
			status: 201,
			user,
		});
	} else {
		res.send({ msg: "failed" });
	}
};

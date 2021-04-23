const { User } = require("../../model/user");

module.exports = async (req, res) => {
	let data = req.fields;
	console.log(data);
	let user = await User.findOneAndUpdate(
		{
			_id: data.uid,
		},
		{
			$pull: {
				address: { _id: data.addrId },
			},
		},
		function (err) {
			if (err) return console.log(err);
		}
	);
	if (user) {
		res.json({
			msg: "成功删除该地址！",
			status: 201,
			user,
		});
	} else {
		res.send({ msg: "failed" });
	}
};

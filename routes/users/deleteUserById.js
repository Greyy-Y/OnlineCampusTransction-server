const { User } = require("../../model/user");

module.exports = async (req, res) => {
	let data = req.fields;
	let user = await User.deleteOne(
		{
			_id: data.uid,
		},
		function (err) {
			if (err) return console.log(err);
		}
	);
	if (user) {
		res.json({
			message: "成功删除该用户！",
			status: 201,
			user,
		});
	} else {
		res.send({ message: "删除失败" });
	}
};

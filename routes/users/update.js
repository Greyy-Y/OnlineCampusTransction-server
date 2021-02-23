const { User } = require("../../model/user");

module.exports = async (req, res) => {
	let data = req.fields;
	let info = await User.updateOne(
		{
			_id: data.uid,
		},
		{ nickName: data.nickName, sex: data.sex || "未知", realName: data.realName, avatar: data.avatar },
		function (err) {
			if (err) res.json({ err, status: 500 });
		}
	);
	res.json({
		info,
		msg: "修改成功",
		status: 201,
	});
};

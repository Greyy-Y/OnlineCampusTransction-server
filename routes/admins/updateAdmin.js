const { Admin } = require("../../model/admin");

module.exports = async (req, res) => {
	let data = req.fields;
	console.log(data);
	let info = await Admin.updateOne(
		{
			_id: data.aid,
		},
		{ nickName: data.nickName, realName: data.realName },
		function (err) {
			if (err) res.json({ err, status: 500 });
		}
	);
	res.json({
		info,
		message: "修改成功",
		status: 200,
	});
};

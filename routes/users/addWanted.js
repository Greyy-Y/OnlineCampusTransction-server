const { User } = require("../../model/user");

module.exports = async (req, res) => {
	let data = req.fields;
	let user = await User.findOneAndUpdate(
		{
			_id: data.uid,
		},
		{
			$addToSet: {
				myWanteds: data.wantedId,
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
};

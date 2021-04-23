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
				address: { receiver: data.receiver, detailAdd: data.detailAdd, phone: data.phone },
			},
		},
		function (err) {
			if (err) return console.log(err);
		}
	);
	res.json({
		msg: "成功新增收货地址",
		status: 200,
		user,
	});
};

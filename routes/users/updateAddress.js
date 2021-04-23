const { User } = require("../../model/user");
module.exports = async (req, res) => {
	let data = req.fields;
	console.log(data);
	let address = await User.findOneAndUpdate(
		{
			_id: data.uid,
			address: {
				$elemMatch: { _id: data.addrId },
			},
		},
		{
			$set: {
				"address.$.receiver": data.receiver,
				"address.$.phone": data.phone,
				"address.$.detailAdd": data.detailAdd,
			},
		}
	);
	res.json({
		status: 200,
		msg: "修改地址信息成功",
		address,
	});
};

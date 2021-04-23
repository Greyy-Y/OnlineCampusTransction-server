const { User } = require("../../model/user");
module.exports = async (req, res) => {
	let data = await User.find();
	res.json({
		status: 200,
		msg: "success",
		data,
	});
};

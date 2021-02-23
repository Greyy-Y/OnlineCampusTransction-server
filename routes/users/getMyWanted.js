const { User } = require("../../model/user");
module.exports = async (req, res) => {
	console.log(req);
	let data = await User.find({ _id: req.fields.uid }, { myWanteds: 1 }).populate("myWanteds");
	res.json({
		status: 200,
		msg: "ok",
		data,
	});
};

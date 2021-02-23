const { Wanteds } = require("../../model/wanteds");
module.exports = async (req, res) => {
	let data = await Wanteds.find().populate("uid");
	res.json({
		status: 200,
		msg: "ok",
		data,
	});
};

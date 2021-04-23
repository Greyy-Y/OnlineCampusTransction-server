const { Wanteds } = require("../../model/wanteds");

module.exports = async (req, res) => {
	console.log(req.fields);
	await Wanteds.deleteOne({ _id: req.fields.wid });
	res.json({
		status: 200,
		message: "成功删除！",
	});
};

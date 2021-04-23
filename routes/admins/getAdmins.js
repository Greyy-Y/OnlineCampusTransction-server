const { Admin } = require("../../model/admin");
module.exports = async (req, res) => {
	let data = await Admin.find();
	res.json({
		status: 200,
		msg: "success",
		data,
	});
};

const { Category } = require("../../model/category");

module.exports = async (req, res) => {
	let result = await Category.find();
	res.send(result);
};

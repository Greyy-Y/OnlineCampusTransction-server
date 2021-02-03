const { Category } = require("../../model/category");

module.exports = async (req, res) => {
	let result = await Category.find();
	console.log(result);
	res.send(result);
};

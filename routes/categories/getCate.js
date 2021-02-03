const { Category } = require("../../model/category");
//获取一级目录
module.exports = async (req, res) => {
	let data = await Category.find();
	res.send(data);
};

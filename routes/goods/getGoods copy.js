const { Goods } = require("../../model/goods");
// test ok
module.exports = async (req, res) => {
	let data = await Goods.find();
	res.json({
		status: 200,
		msg: "ok",
		data,
	});
};




const { Goods } = require("../../model/goods");
// 导入分页模块
const pagination = require("mongoose-sex-page");
module.exports = async (req, res) => {
	const { pagenum, pagesize } = req.query;
	let result;

	result = await pagination(Goods).find().page(pagenum).size(pagesize).display().populate("category").exec();
	result = JSON.stringify(result);
	result = JSON.parse(result);

	res.send(result);
};

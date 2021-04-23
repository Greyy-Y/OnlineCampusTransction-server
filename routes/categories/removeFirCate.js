const { Category } = require("../../model/category");

module.exports = async (req, res) => {
	let data = req.fields;
	console.log(data);
	// 查找一级分类是否存在;
	let firCate = await Category.findOneAndDelete(
		{
			_id: data.id,
		},
		(err, doc) => {
			if (err) {
				console.log(err);
			}
			res.send({ message: "删除成功", status: 200 });
		}
	);
	id;
};

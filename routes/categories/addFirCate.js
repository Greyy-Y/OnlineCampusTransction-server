const { Category } = require("../../model/category");

module.exports = async (req, res) => {
	let data = req.fields;
	// 查找一级分类是否存在;
	let firCate = await Category.findOne({
		name: data.name,
	});
	if (firCate) {
		return res.send({ message: "该一级分类已存在", status: 401 });
	}
	// 插入一级分类;
	await Category.create(
		{
			name: data.name,
		},
		(err, doc) => {
			if (err) {
				console.log(err);
			}
			res.send({ message: "添加成功", status: 201 });
		}
	);
};

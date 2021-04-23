const { Category } = require("../../model/category");
const Joi = require("joi");
// 添加 分类）
module.exports = async (req, res) => {
	let data = req.fields;
	console.log(data);
	let firCate = await Category.findOne({ name: data.name });
	if (!firCate) {
		return res.send({
			message: "该分类不存在",
			status: 401,
		});
	}
	// 查找二级分类是否存在;
	let subcate = await Category.findOne({
		$and: [{ name: data.name }, { subCate: { $elemMatch: { subName: data.subCate[0].subName } } }],
	});
	if (subcate) {
		return res.send({ message: "该二级分类已存在", status: 401 });
	}
	// 插入二级分类
	Category.findOneAndUpdate(
		{
			name: data.name,
		},
		{
			$push: {
				subCate: {
					subName: data.subCate[0].subName,
					pic: data.subCate[0].pic,
				},
			},
		},
		function (err, data) {
			if (err) {
				console.log(err);
			}
			res.send({ message: "添加成功", status: 200 });
		}
	);

	// 创建分类 保存
	// cate = new Category(data);
	// cate.save(function (err) {
	// 	if (err) return res.send({ message: "该分类已存在" });
	// 	// saved!
	// 	res.send({ message: "添加成功", status: 200 });
	// });
};

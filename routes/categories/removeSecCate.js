const { Category } = require("../../model/category");
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
	// // 查找二级分类是否存在;
	// let subcate = await Category.findOne({
	// 	$and: [{ name: data.name }, { subCate: { $elemMatch: { subName: data.subCate[0].subName } } }],
	// });
	// if (!subcate) {
	// 	return res.send({ message: "该二级分类不存在", status: 401 });
	// }
	// 更新二级分类
	let cate = await Category.findOneAndUpdate(
		{
			name: data.name,
		},
		{
			$pull: {
				subCate: { _id: { $in: data.id } },
			},
		}
	);
	res.json({
		status: 200,
		message: "删除成功",
	});
};

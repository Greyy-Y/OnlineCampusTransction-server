const { Category } = require("../../model/category");
// 添加 分类）
module.exports = async (req, res) => {
	let data = req.fields;
	console.log(data);
	// 更新二级分类
	let cate = await Category.findOneAndUpdate(
		{
			name: data.name,
			subCate: {
				$elemMatch: { _id: data.subId },
			},
		},
		{
			$set: {
				"subCate.$.subName": data.subName,
				"subCate.$.pic": data.pic,
			},
		}
	);
	res.json({
		status: 200,
		message: "修改成功",
		cate,
	});
};

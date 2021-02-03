const mongoose = require("mongoose");

// 商品分类

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			// required: true,
			minlength: 2,
			maxlength: 10,
		},
		subCate: [
			{
				subName: {
					type: String,
					unique: true,
				},
				pic: {
					type: String,
				},
				// subCateid: {
				// 	type: mongoose.Schema.Types.ObjectId,
				// },
			},
		],
	},
	{ versionKey: false }
);

// 创建集合
const Category = mongoose.model("Category", categorySchema);

module.exports = {
	Category,
};

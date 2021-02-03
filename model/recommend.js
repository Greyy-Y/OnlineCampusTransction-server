const mongoose = require("mongoose");
const Joi = require("joi");

const recommendSchema = mongoose.Schema({
	// 0---推荐   1---精选
	type: {
		type: Number,
		enum: [0, 1],
	},
	good: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Goods",
	},
});

const Recommend = mongoose.model("Recommend", recommendSchema);

const validateRecommend = (recommend) => {
	// 定义验证规则
	const schema = Joi.object({
		r_type: Joi.number().required().error(new Error("推荐类型不符合验证规则")),
	});
	// 验证
	return schema.validateAsync(recommend, {
		//检测所有错误
		abortEarly: false,
		//允许对象包含被忽略的未知键
		allowUnknown: true,
	});
};

// Recommend.create(
// 	{
// 		type: 0,
// 		good: "6009813e59a48d49cc9b804a",
// 	},
// 	function (err, res) {
// 		if (err) console.log(err);
// 		console.log(res);
// 	}
// );

// Recommend.find()
// 	.populate("good")
// 	.then((res) => console.log(res));

module.exports = {
	Recommend,
};

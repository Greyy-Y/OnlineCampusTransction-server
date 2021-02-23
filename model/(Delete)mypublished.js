const mongoose = require("mongoose");

const mypublishedSchema = mongoose.Schema({
	// 0---推荐   1---精选
	myGood: [
		{
			good: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Goods",
				require: true,
			},
			/*发布商品的状态
   0---未过审
   1---审核中
   2---已过审
  */
			// 是否过审
			state: {
				type: Number,
				enum: [0, 1, 2],
				default: 1,
			},
		},
	],
	myWanted: [
		{
			wanted: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Wanteds",
				require: true,
			},
			// 是否过审
			state: {
				type: Number,
				enum: [0, 1, 2],
				default: 1,
			},
		},
	],
});

const MyPublished = mongoose.model("MyPublishedGoods", mypublishedSchema);

module.exports = {
	MyPublished,
};

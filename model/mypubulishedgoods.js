const mongoose = require("mongoose");

const mypublishedgoodsSchema = mongoose.Schema({
	// 0---推荐   1---精选
	uid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	mpgood: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Goods",
	},

	/*发布商品的状态
   0---未过审
   1---审核中
   2---已过审
  */

	state: {
		type: Number,
		enum: [0, 1, 2],
	},
});

const MyPublishedGoods = mongoose.model("MyPublishedGoods", mypublishedgoodsSchema);

module.exports = {
	MyPublishedGoods,
};

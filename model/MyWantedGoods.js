const mongoose = require("mongoose");

const mywantedgoodsSchema = mongoose.Schema({
	// 0---推荐   1---精选
	uid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	mwgood: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Goods",
	},
});

const MyWantedGoods = mongoose.model("MyWantedGoods", mywantedgoodsSchema);

module.exports = {
	MyWantedGoods,
};

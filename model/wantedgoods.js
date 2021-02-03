const mongoose = require("mongoose");

const wantedgoodsSchema = mongoose.Schema({
	name: {
		type: String,
	},
	uid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users",
	},
	contact: {
		type: String,
	},
	desc: {
		type: String,
	},
	budget: {
		type: Number,
	},
	modifyTime: {
		type: Date,
		default: Date.now,
	},
});

const WantedGoods = mongoose.model("WantedGoods", wantedgoodsSchema);

module.exports = {
	WantedGoods,
};

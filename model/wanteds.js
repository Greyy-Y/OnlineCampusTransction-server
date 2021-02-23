const mongoose = require("mongoose");

const wantedsSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	uid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
	},
	budget: {
		type: String,
	},
	modifyTime: {
		type: Date,
		default: Date.now,
	},
	pic: {
		type: Array,
	},
	/*发布商品的状态
   0---未过审
   1---审核中
   2---已过审
  */
	state: {
		type: Number,
		enum: [0, 1, 2],
		default: 1,
	},
	display: {
		type: Boolean,
		default: false,
	},
});

const Wanteds = mongoose.model("Wanteds", wantedsSchema);

module.exports = {
	Wanteds,
};

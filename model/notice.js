const mongoose = require("mongoose");

const noticeSchema = mongoose.Schema(
	{
		buyerId: {
			type: mongoose.Schema.Types.ObjectId,
			// ref: "User",
			required: true,
		},
		sellerId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		orderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Orders",
			required: true,
		},
		count: {
			type: Number,
			required: true,
		},
		good: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Goods",
			required: true,
		},

		// 消息状态 0未读 1已读
		state: {
			type: Number,
			enum: [0, 1],
			default: 0,
			require: true,
		},
		address: [
			{
				receiver: {
					type: String,
					required: true,
				},
				detailAdd: {
					type: String,
					required: true,
				},
				phone: {
					type: String,
					required: true,
				},
			},
		],
	},
	{
		timestarp: true,
		versonKey: false,
	}
);

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = { Notice };

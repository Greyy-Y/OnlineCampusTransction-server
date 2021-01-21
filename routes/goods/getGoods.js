const { Goods } = require("../../model/goods");

// module.exports = (req, res) => {
// 	// res.send("这里将会返回所有商品信息");
// 	//这个测试成功 下面试试用async awiat
// 	let result = Goods.find({}, (err, doc) => {
// 		if (err) {
// 			res.json({
// 				status: 1,
// 				msg: err.message,
// 			});
// 		} else {
// 			res.json({
// 				status: 200,
// 				msg: "ok",
// 				result: {
// 					list: doc,
// 				},
// 			});
// 		}
// 	});
// };

// test ok
module.exports = async (req, res) => {
	let data = await Goods.find();
	res.json({
		status: 200,
		msg: "ok",
		data,
	});
};

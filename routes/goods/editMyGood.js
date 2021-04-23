const { Goods } = require("../../model/goods");

module.exports = async (req, res) => {
	let data = req.fields;
	let good = await Goods.updateOne(
		{
			_id: data.gid,
		},
		{
			name: data.name,
			desc: data.desc,
			price: data.price,
			new: data.new,
			originPrice: data.oringinPrice,
			category: data.category,
			count: data.count,
			pic: data.pic,
			// 修改后默认需要审核 不展示
			display: false,
			// 同时状态修改为待审核
			state: 1,
		},
		function (err, data) {
			if (err) {
				console.log(err);
				res.json({
					status: 500,
				});
			}
			res.json({
				status: 200,
				message: "已更新商品信息！",
			});
		}
	);
};

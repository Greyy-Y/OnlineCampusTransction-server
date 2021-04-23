const { Orders } = require("../../model/orders");

module.exports = async (req, res) => {
	let data = req.fields;
	await Orders.updateOne({ _id: data.oid },
    {
      state:1,
      payStatus: 1,
      payType:data.payType,

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
        message: "支付成功！",
      });
    });
};

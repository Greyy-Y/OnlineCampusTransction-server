const { Goods } = require("../../model/goods");

module.exports = (req, res) => {
    let data = req.body;
	console.log(data);
	res.send(req.body);
};

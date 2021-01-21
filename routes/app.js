//处理post参数
const bodyParser = require("body-parser");
//路由集合
module.exports = (app) => {
	//处理post参数
	// 处理urlencode 格式数据
	app.use(bodyParser.urlencoded({ extend: false }));
	// 处理json 格式数据
	app.use(bodyParser.json());

	//首页
	// app.use("/index", require("./index"));

	//二手
	app.use("/goods", require("./goods"));
};

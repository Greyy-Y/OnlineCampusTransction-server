//处理post参数
const bodyParser = require("body-parser");
//路由集合
module.exports = (app) => {
	//处理post参数
	// 处理urlencode 格式数据
	// app.use(bodyParser.urlencoded({ extend: false }));
	// // 处理json 格式数据
	// app.use(bodyParser.json());
	//首页
	// app.use("/index", require("./index"));
	//二手
	app.use("/goods", require("./goods"));
	//求购
	app.use("/wanteds", require("./wanteds"));
	//登录
	app.post("/login", require("./login"));
	//注册
	app.post("/register", require("./register"));
	// 商品分类
	app.use("/categories", require("./categories"));
	//用户
	app.use("/users", require("./users"));
	// 获取首页推荐
	app.use("/recommend", require("./recommend"));
	// 图片文件上传
	app.post("/upload", require("./upload"));

	app.use("/test", require("./test"));
};

const express = require("express");
const path = require("path");
//处理文件上传
const formidableMiddleware = require("express-formidable");

const app = express();
const port = 3000;

//数据库连接
require("./model/connect");
//跨域处理
app.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Headers", "Content-type");
	next();
});

// 处理post参数;
app.use(
	formidableMiddleware({
		//文件上传目录
		uploadDir: path.join(__dirname, "public", "uploads"),
		//z最大上传文件为2M
		maxFileSize: 2 * 1024 * 1024,
		//保留文件扩展名
		keepExtensions: true,
	})
);

// 开放静态资源
app.use(express.static(path.join(__dirname, "public")));

//引入路由模块;
require("./routes/app.js")(app);
app.get("/", (req, res) => res.send("Weclome to backend"));

app.listen(port, () => {
	console.log("running.....");
});

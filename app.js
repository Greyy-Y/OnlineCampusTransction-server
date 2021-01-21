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

//开放静态资源
// app.use(express.static(path.join(__dirname, "public")));

//引入路由模块;
require("./routes/app.js")(app);
app.get("/", (req, res) => res.send("Hello World! database connected?"));

app.listen(port, () => {
	console.log("running.....");
});

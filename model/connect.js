const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
mongoose
	.connect("mongodb://localhost/onlinecampus", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("数据库连接成功");
	})
	.catch(() => {
		console.log("数据库连接失败");
	});

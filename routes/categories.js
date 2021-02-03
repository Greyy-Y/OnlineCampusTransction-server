const categories = require("express").Router();
// 查询所有分类
categories.get("/", require("./categories/getCate"));

// //获取一级分类
// categories.get("/getCate", require("./categories/getCate"));
// 添加一级分类
categories.post("/addFirCate", require("./categories/addFirCate"));
// 添加二级分类
categories.post("/addSubCate", require("./categories/addSubCate"));

module.exports = categories;

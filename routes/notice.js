// "通知"路由
const notice = require("express").Router();

// 新建通知
notice.post("/create", require("./notice/create"));

notice.post("/getMyNotice", require("./notice/getMyNotice"));

module.exports = notice;

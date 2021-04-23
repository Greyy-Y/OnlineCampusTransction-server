// 管理员信息路由
const admins = require("express").Router();
//注册用户
admins.post("/add", require("./admins/add"));

admins.post("/login", require("./admins/login"));

admins.get("/getAdmins", require("./admins/getAdmins"));

admins.post("/getAdminsById", require("./admins/getAdminsById"));

admins.post("/updateAdmin", require("./admins/updateAdmin"));
admins.post("/updateState", require("./admins/updateState"));

admins.post("/deleteAdmin", require("./admins/deleteAdmin"));
module.exports = admins;

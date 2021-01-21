const mongoose = require("mongoose");

const bcryptjs = require("bcryptjs");

//创建用户集合规则
const userSchema = mongoose.Schema({
    nickName = {
        type:String,
        required:true,
        minlength:2,
        maxlength:16
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        enum:["男","女","未知"]
    },
    role:{
        type:String,
        default:"normal",
        enum:["normal","admin"]
    },
    avatar:{
        type:String,
        default:null
    },
    createdTime:{
        type:Date,
        default:Date.now
    }
},{versonKey:"false"})

//user集合
const User = mongoose.model("User",userSchema)

module.exports = {
    User
}
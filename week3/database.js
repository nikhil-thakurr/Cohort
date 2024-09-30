const mongoose = require ("mongoose");
const { string } = require("zod");

const con =  mongoose.connect("mongodb+srv://nt34542:nikhil@connect.m4hlb.mongodb.net/")

const users = mongoose.model('test',{name:String , email:String ,password:String});

const user = new users({
    name:"nik",
    email:"nik@gmail.com",
    password:"nik"
})

user.save();
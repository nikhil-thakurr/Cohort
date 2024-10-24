const mongoose = require("mongoose");


const connectDb = async ()=>{

    try{
        await mongoose.connect("mongodb://localhost:27017/practiseAuth");
        console.log("CONNECTED")
    }
    catch(e){
        console.log("wrong string")
    }
}

module.exports = connectDb
const mongoose=require('mongoose');
const debugLog=require("debug")("developement:Mongoose_Connection");

mongoose.connect("mongodb://localhost:27017/AINutri");

const db=mongoose.connection;

db.on("error",(err)=>{
  console.log(err.message);
});

db.on("open",()=>{
  debugLog("connected to db");
});

module.exports=db;


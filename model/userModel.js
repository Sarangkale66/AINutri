const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
  name:String,
  email:{
    type:String,
    unique:true,
  },
  password:String,
  height:{
    type:Number,
    default:0
  },
  weight:{
    type:Number,
    default:0
  },
  bpm:{
    type:String,
    default:0
  },
  files:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"file"
  }],
});

module.exports=mongoose.model("user",userSchema);
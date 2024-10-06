const mongoose=require("mongoose");

const fileSchema=mongoose.Schema({
  fileName:{
    type:String,
  },
  data:{
    type:String,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
});

module.exports=mongoose.model("file",fileSchema);
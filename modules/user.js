const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/AINutri');

const userSchema =mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    salt: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profileImage: {
        type: String,
        default: "",
    },
    role: {
        type: String,
        default: ["USER"],
        enum: ["USER", "ADMIN"]
    },
    DOB:{
        type:String,
        require:true
    },
    mobileNO:{
        type:Number,
        require:true
    },
    height:{
        type:Number,
        require:true
    },
    weight:{
        type:Number,
        require:true
    },
    disability:{
        type:String,
        require:true
    },
    bloodGroup:{
        type:String,
        require:true
    }

},{
    timestamps: true,
});

const User=mongoose.model("user",userSchema);

module.exports=User;
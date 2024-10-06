const userModel=require("../model/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

module.exports.Login=async(req,res)=>{
  let {email,password,}=req.body;
  let user=await userModel.findOne({email});
  if(!user) return res.send("something went wrong");

  bcrypt.compare(password,user.password,(err,result)=>{
    if(result){
      let token=jwt.sign({name:user.name,email:email,userid:user._id,bpm:user.bpm},"SarangRajeshKale");
      res.cookie("token",token);
      res.redirect("/App/profile");
    }
    else
      res.redirect("/auth/login");
  });
}

module.exports.SignUP=async(req,res)=>{
  const {name,email,password,}=req.body;
  let user=await userModel.findOne({email});
  if(user) return res.status(500).send("user already registered");

  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,async(err,hash)=>{
    let user = await userModel.create({
        name,
        email,
        password:hash,
      });
    let token=jwt.sign({name:name,email:email,userid:user._id,bpm:0},"SarangRajeshKale");
    res.cookie("token",token);
    res.status(200).redirect("/App/profile");
    });
  });
}

module.exports.Logout=async(req,res)=>{
  res.cookie("token","");
  res.redirect("/auth/login");
}
const express=require('express');
const app=express.Router();
const {Login,SignUP,Logout}=require("../controller/Authentication_Controller")

app.get("/login",(req,res)=>{
  res.render("login.ejs");
});

app.post("/login",Login);

app.post("/signup",SignUP);

app.get("/logout",Logout);

module.exports=app;
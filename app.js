const express=require('express');
const app=express();
const path=require('path');
const userRouter=require('./routes/user')
const User=require('./modules/user');
const cookieParser = require('cookie-parser');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const checkLoggedIn=require("./controller/user")

let port=process.env.PORT||8000;


app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter);

app.get("/",async(req,res)=>{
  const result=await User.find();
  res.render("index",{result});
});

app.get("/error",(req,res)=>{
  res.render("somethingWentWrong.ejs");
})

app.get("/profile",checkLoggedIn,(req,res)=>{
  console.log(req.user);
  res.render("profile.ejs");
})

app.listen(port,function(){
  console.log(`server run on http://localhost:${port}`);
})
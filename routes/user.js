const express = require('express');
const app = express();
const User=require("../modules/user"); 
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/login",async(req,res)=>{
    let user=await User.findOne({email:req.body.email});
    bcrypt.compare(req.body.password, user.password).then(function(result) {
        if(result){
            let token=jwt.sign({email:req.body.email,fullName:user.fullName},"shhhh");
            res.cookie("token",token)
            res.redirect("/profile");
        }else{
            res.redirect("/user/login");
        }
    });
});

app.get("/signup", (req, res) => {
    res.render('signup.ejs');
});

app.post("/signup", async (req, res) => {
    const { fullName, email, password, role, mobileNo, DOB, height, weight, bloodGroup } = req.body;

    let user=await User.findOne({email});
    if(user) return res.status(500).redirect("/profile");

    bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(password, salt,async function(err, hash) {
            await User.create({
                fullName,
                email,
                salt,
                password:hash,
                role,
                mobileNo,
                DOB,
                height,
                weight,
                bloodGroup
            })
            let token=jwt.sign({email,fullName},"shhhh")
            res.cookie("token",token);
            res.redirect("/profile");
        });
        });

})

app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
});

module.exports = app;
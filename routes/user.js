const express = require('express');
const User=require("../modules/user")

const app = express();

app.get("/", (req, res) => {
    res.render('index.ejs');
})

app.get("/signin", (req, res) => {
    res.render("login.ejs");
})

app.post("/", async (req, res) => {
    const { fullName, email, password, role, mobileNo, DOB, height, weight, bloodGroup } = req.body;
    await User.create({
        fullName,
        email,
        password,
        role,
        mobileNo,
        DOB,
        height,
        weight,
        bloodGroup
    })
    res.redirect("/login");
})

module.exports = app;
const express = require('express');
const User = require("../modules/user")

const app = express();



app.get("/signup", (req, res) => {
    res.render('index.ejs');
})

app.get("/signin", (req, res) => {
    res.render("login.ejs");
})

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log(email, password);
        const token = User.MatchPassword(email, password);

        return res.cookie('token', token).redirect('/');//cookie created
    } catch (e) {
        return res.render('login.ejs', {
            error: "Invalid email or password"
        });
    }

});

app.get('/logout',(req,res)=>{
    res.clearCookie('token').render("index"); //cookie cleared
})
 


app.post('/signup', async (req, res) => {
    const user = req.body;

    const newUser = await User({
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        DOB: user.DOB,
        mobileNO: user.mobileNO,
        height: user.height,
        weight: user.weight,
        role: 'USER',
    });

    await newUser.save();
    res.redirect('/');


});


module.exports = app;
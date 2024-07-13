const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/user');
const User = require('./modules/user');
const { cookieAuthentication } = require('./middleware/authentication');
const cookieParser = require('cookie-parser');



let port = process.env.PORT || 8000;

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieAuthentication("token"));
app.use(express.static(path.resolve('./public')));


app.use('/user', userRouter);


app.get("/", (req, res) => {
  res.render("Diet");
});

// app.get("/", (req, res) => {
//   res.send("helloworld");
// })

app.listen(8000, function () {
  console.log("server is on:", port);
})
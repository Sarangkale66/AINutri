require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const session = require('express-session');
const cookieParser = require('cookie-parser');

//exported files
const Auth=require("./routes/Authentication");
const App=require("./routes/Application");
const Gemini=require("./routes/Gemini");

//mongo-db connections
const mongoDBConnection=require("./config/mongoose_connect");
const IsLoggedIn = require('./middlewares/IsLoggedIn');
const DataForwarder=require('./middlewares/DataForwarder');

app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/",DataForwarder,(req,res)=>{
  res.render('index.ejs',{user:req.user});
});

app.use("/auth",Auth);
app.use("/App",IsLoggedIn,App);
app.use("/gemini",IsLoggedIn,Gemini);

let port=process.env.PORT||3000;
app.listen(port,()=>{
  console.log('server run on http://localhost:'+port);
}); 
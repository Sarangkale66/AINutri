const express=require('express');
const app=express();
const path=require('path');
let port=process.env.PORT||8000;

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.get("/sarang",(req,res)=>{
  res.send("helloworld");
})

app.listen(8000,function(){
  console.log("server is on:",port);
})
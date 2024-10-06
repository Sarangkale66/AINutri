const express=require("express")
const app=express.Router();
let {readDir,createFile,readFile,editFile,deleteFile,updateBPM, readBPM}=require("../controller/App_Controllers");

app.get('/',(req,res)=>{
  res.render("app.ejs");
});

app.get('/profile',(req,res)=>{
  res.render("profile.ejs",{user:req.user});
})

app.get('/home',function(req, res){
  res.render("home.ejs");
});

app.get('/bpm/read',readBPM);

app.get('/bpm/:bp',updateBPM);

app.get('/readDir',readDir);

app.get("/create/:fileName",createFile);

app.get("/read/:filename",readFile);

app.post("/edit",editFile);

app.get("/delete/:filename",deleteFile);

module.exports=app;
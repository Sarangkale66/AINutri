const express=require('express');
const app=express();
const path=require('path');
const userRouter=require('./routes/user')
const User=require('./modules/user')

let port=process.env.PORT||8000;

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter);

app.get("/",async(req,res)=>{
  const result=await User.find();
  res.render("index.ejs",{result});
});

app.listen(port,function(){
  console.log(`server run on http://localhost:${port}`);
})
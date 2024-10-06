const express=require("express");
const app=express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

app.get("/:prompt",async(req,res)=>{
  try{
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    const result = await model.generateContent(req.params.prompt);
    res.json({data:result.response.text()});
  }catch(err){
    res.json({data:"⚠️ Internal Server Problem or check your connection!"})
  }
});

module.exports=app;
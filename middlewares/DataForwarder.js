const jwt=require("jsonwebtoken");

module.exports=function DataForwarder(req,res,next){
  if(req.cookies.token){
    let data=jwt.verify(req.cookies.token,"SarangRajeshKale");
    req.user=data;
  }
  next();
}
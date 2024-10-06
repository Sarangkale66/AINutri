const jwt=require("jsonwebtoken");

module.exports=function IsLoggedIn(req,res,next){
  if(req.cookies.token){
    let data=jwt.verify(req.cookies.token,"SarangRajeshKale");
    req.user=data;
  }else{
    return res.redirect("/auth/login");
  }
  next();
}
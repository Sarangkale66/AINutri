const jwt=require('jsonwebtoken');

module.exports=function checkLoggedIn(req,res,next){
  if(req.cookies.token==="")
    res.status(500).redirect("/login");
  else{
    let data=jwt.verify(req.cookies.token,"shhhh");
    req.user=data;
    next();
  }
}
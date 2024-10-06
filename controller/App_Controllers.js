const fileModel=require("../model/fileModel");
const userModel=require("../model/userModel");
const debugLog=require("debug")("developement:Application");

module.exports.readDir= async(req, res)=>{
  try{
    const data=await userModel.findById(req.user.userid).populate("files");
    if(!data){
     return res.send("something went wrong");
    } 

    const filename=data.files.map(file=>file.fileName);
    res.send(filename);
  }catch(err){
    debugLog(err.message);
    res.send({data:"something went wrong"});
  }
}

module.exports.createFile=async(req,res)=>{
  const checkfile=await fileModel.findOne({$and:[{user:req.user.userid},{fileName:req.params.fileName}]});

  if(!checkfile){
    const file= await fileModel.create({fileName:req.params.fileName,user:req.user.userid,data:"Welcome to the AINUTRI! 🙏"});
    const user=await userModel.findOne({_id:req.user.userid});
    user.files.push(file._id);
    await user.save();
    return res.send({data:"done"});
  }
  res.send({data:"something went wrong"});
}

module.exports.readFile=async(req,res)=>{
  try{
    const file=await fileModel.findOne({$and:[{user:req.user.userid},{fileName:req.params.filename}]});
    res.send({data:file.data});
  }catch(err){
     debugLog(err.message);
     res.send({data:"something went wrong"});
  } 
}

module.exports.editFile=async (req,res)=>{
  let {filename,data}=req.body;
  if(filename!==""){
    try{
        const file=await fileModel.findOneAndUpdate({$and:[{fileName:filename},{user:req.user.userid}]},{data},{new:true});
        res.status(200).send(file);
    }catch(err){
      debugLog(err.message);
      res.send({data:"something went wrong"});
    }
  }
}

module.exports.deleteFile=async(req,res)=>{
  try{
    const file=await fileModel.findOneAndDelete({$and:[{user:req.user.userid},{fileName:req.params.filename}]});

    const result = await userModel.findByIdAndUpdate(
      req.user.userid,
      { $pull: { files: file._id } }, 
      { new: true, useFindAndModify: false }
    );

    if (!result) {  
      return res.status(200).send({data:"user not found"});
    }

    res.status(200).send({data:"done"});
  } catch (error) {
    res.status(500).send({data:"server error"});
  }
}

module.exports.updateBPM=async(req,res)=>{
  try{
    await userModel.findOneAndUpdate({_id:req.user.userid},{bpm:req.params.bp},{new:true});
      res.json({data:"done"});
  }catch(err){
    res.json({data:"something went wrong"});
  }
}

module.exports.readBPM=async(req,res)=>{
  try{
    const data=await userModel.findOne({_id:req.user.userid}).select('bpm');
    res.json(data);
  }catch(err){
    res.json({data:"something went wrong"});
  }
}
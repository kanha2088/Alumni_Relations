const jwt = require('jsonwebtoken');
const Profile = require('../models/Profile');
const uploadpost=require('../models/upload');

exports.setprofile = async (req, res) => {
    try {

      console.log('set profile called');
      const { name, branch, year, storedtoken, email } = req.body;
      console.log(storedtoken)
      const decoded = jwt.verify(storedtoken, process.env.SECRET_KEY);
      console.log(decoded,"decoded is")
      const rollNo=decoded.rollNo;

      const setimage = req.file.filename;
      console.log("rollNo is ",rollNo)
      console.log("image is ",setimage);
      const image=setimage
      const newProfile = await Profile.create({
        branch,
        image,
        name,
        year,
        rollNo,
        email,
      });
      
      // console.log("finish")
    //  console.log(newProfile)
      
      res.status(201).json(newProfile);
    } catch (error) {
      console.log(error)
      res.status(400).json({ message:"error ho gya",error:error });
    }
  };
exports.getprofile=async(req,res)=>{
try{
    console.log("get profile called")
    const {token}=req.body;

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const rollNo=decoded.rollNo;
    console.log(rollNo)
    const uploads = await Profile.findOne({rollNo}).populate('posts');
    if(!uploads){
      return res.json({ message: "Enter details" });
    }
    //console.log("uplaods is",uploads)   
    uploads.posts='posts';
    uploads.messages='messages';

    res.status(200).json({message:"suceess",uploads});
}
catch(err){
    res.status(400).json({ message:"error"});
}
}
exports.getotherprofile=async(req,res)=>{
  try{
      console.log("get otherprofile called")
      const {rollNo}=req.body;
  
   
      console.log(rollNo)
      const uploads = await Profile.findOne({rollNo}).populate('posts');
      if(!uploads){
        return res.json({ message: "Enter details" });
      }
      console.log("uplaods is",uploads)   
      
      uploads.messages='messages';
  
      res.status(200).json({message:"suceess",uploads});
  }
  catch(err){
      res.status(400).json({ message:"error"});
  }
  }
exports.editprofile = async (req, res) => {
    const profile = req.body; // Assuming these are the fields you want to update
  
    try {

        console.log(" edit profile called",profile)
      // Find the profile by _id
      const name=profile.name;
      const year=profile.year;
      const branch=profile.branch;
      const updatedprofile=await Profile.findByIdAndUpdate  
            ({_id:profile.profileid},
            {name,year,branch},
            )  
            res.status(200).json({
                success:true,
                message:"updated",
            })

      res.status(200).json(updatedprofile);
    } catch (err) {
      console.error('Error updating profile:', err);
      res.status(500).json({ message: 'Server error' });
    }
  };
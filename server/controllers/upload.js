
const uploadpost = require('../models/upload');
const Profile = require('../models/Profile');
const path = require('path');

exports.uploadImage = async (req, res) => {
    try {
        console.log("upload called")
        const { description,rollNo,profileid } = req.body;
        const image = req.file.filename;
            console.log(description)
            console.log(rollNo)
            console.log(req.file.filename)
            console.log(profileid)
            
            

        const newpost = await uploadpost.create({
            description,
            image,
            profileid,
            rollNo,
            
        });
        const post = await Profile.findByIdAndUpdate(
            req.body.profileid,
            { $push: { posts: newpost._id } },
            { new: true }
          ).populate('posts');
        
          res.send(post);
      
       
    } catch (err) {
        console.log(err)
    }
};

exports.getAllUploads=async(req,res) =>{
    try{
                
                console.log("all called")
                
                const uploads = await uploadpost.find().populate('profileid').sort({ createdAt: -1 });
                      
                res.status(200).json(uploads);
          
         
    }
    catch{
        res.status(500).json({ error: err.message });
    }
}
exports.getmyUploads=async(req,res) =>{
    try{
                
                console.log("my called")
                const {rollNo}=req.body;
                console.log("roll",rollNo)
                const uploads = await uploadpost.find({rollNo}).populate('profileid').sort({ createdAt: -1 });
                console.log(uploads)        
                res.status(200).json(uploads);
          
        
    }
    catch{
        res.status(500).json({ error: err.message });
    } 
}

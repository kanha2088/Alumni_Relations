const Profile=require('../models/Profile')
const jwt = require('jsonwebtoken');
exports.myprofile=async(req,res)=>{
    try{
        console.log("my profile called")
        const {token}=req.body;
    
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const rollNo=decoded.rollNo;
        console.log(rollNo)
        const uploads = await Profile.findOne({rollNo}).populate('posts').populate('messages');
        console.log(uploads)
        res.status(200).json({message:"suceess",uploads});
    }
    catch(error){
        res.status(500).json({
            error: {
                message: 'An unexpected error occurred while fetching the profile.',
                details: error.message // Optionally include error details
            }
        });
    }

}
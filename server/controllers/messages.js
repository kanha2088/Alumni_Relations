

const Profile = require('../models/Profile');
const messages=require('../models/messages')

exports.messages = async (req, res) => {
    
      try{
               const {description,rollNo,id,name,branch,email}=req.body;
               console.log(description,rollNo,id,name,branch,email)
               const newmessage = await messages.create({
                description,
                branch,
                name,
                email,
                rollNo,
                id
            });

            const message = await Profile.findOneAndUpdate(
                { rollNo },
                { $push: { messages: newmessage._id } },
                { new: true }
              ).populate('messages');
              
              res.status(200).json({
               
                message
              })
      }
      catch(err){
                res.status(400).json(err) 
      }
};

 
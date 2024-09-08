
const mongoose=require("mongoose")

const profileSchema= new mongoose.Schema({
           name:{
                type:String,
                required:true,
            },
            
            image:{
                type:String,
                required:true,
            },
            year:{
                type:Number,
                required:true,
            },

            branch:{
                type:String,
                required:true,
            },
            email:{
                type:String,
                required:true,
            },
            posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'uploadpost' }],
            messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'messages' }],
            rollNo:{
                type:Number,
                required:true,
            }

           
            
})
module.exports=mongoose.model("Profile",profileSchema);


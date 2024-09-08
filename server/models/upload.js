

const mongoose=require("mongoose")

const uploadSchema= new mongoose.Schema({
 
    description: {
        type: String,
        required: true,
    },
    rollNo: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    name:
    {
        type: String,
        required: true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now,
        }    
            
})
module.exports=mongoose.model("uploadpost",uploadSchema);


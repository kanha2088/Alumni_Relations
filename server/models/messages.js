
const mongoose=require("mongoose")

const messagesSchema= new mongoose.Schema({
           rollNo:{
                type:String,
                required:true,
            },
            
            description:{
                type:String,
                required:true,
            },
            name:{
                type:String,
                required:true,
            
            }
            ,
            branch:{
                type:String,
                required:true,
            },
            email:{
                type:String,
                required:true,
            },
            id:{
                type:String,
                required:true,
            }

           
            
})
module.exports=mongoose.model("messages",messagesSchema);



const mongoose=require("mongoose")
const jwt=require('jsonwebtoken');
const rolesignupSchema= new mongoose.Schema({
           role:{
                type:String,
                
            },
          
            rollNo:{
                type:String,
                
            },
            password:{
                type:String,
               
               
            }
            
           
                    
})
                    
module.exports=mongoose.model("Rolesignup",rolesignupSchema);



const mongoose=require("mongoose")

const excelSchema= new mongoose.Schema({
           role:{
                type:String,
                
            },
          
            rollNo:{
                type:String,
                
            },
            password:{
                type:String,
               
               
            },
           
            
})
module.exports=mongoose.model("exceldata",excelSchema);


const Rolesignup=require("../models/rolesignup")

const bcrypt = require('bcryptjs');
exports.rolesignup=async(req,res)=>{
    try{
        console.log("backened called")
        const role=req.body.role;
        const rollNo=req.body.rollNo;
        const password=req.body.password;
        console.log("backened firstname called new sign",role);
   
       console.log("backened called",rollNo);
             const existingUser = await Rolesignup.findOne({rollNo})
             console.log("existing user ",existingUser);
                  if (existingUser!=null) {
                    return res.status(400).json({ message: 'Username already taken' });
                  }
                
                  const hashedPassword = await bcrypt.hash(password, 10);

                 
                 
            

          const registerstudent= Rolesignup.create({
            role,rollNo,password:hashedPassword
          })
     
           
              res.status(200).json({
                 message:"sucs ",
                 
              })
                
            } 
            catch(err){
                console.log(err,"err from backened",err);
            } 
}

exports.rolesignin=async(req,res)=>{
  try{
      console.log("backenedin called")
      
      const rollNo=req.body.rollNo;
      const password=req.body.password;
      
 
          console.log("backened called",rollNo);

          const user =await  Rolesignup.findOne({rollNo});
      console.log(user)
          const isMatch = await bcrypt.compare(password, user.password);
          console.log(isMatch)
              if (!isMatch) {
                return res.status(400).json({ message: 'Invalid username or password' });
              }
              res.status(200).json({
                message:"sucs ",
                user
             })
              
          } 
          catch(err){ 
              console.log(err,"err from backened",err);
          } 
}






const Profile=require("../models/Profile")

exports.setprofile=async(req,res)=>{

try{
    console.log("proflie called")
    const {name,branch,year,rollNo,email}=req.body;

    const image = req.file.filename;
    console.log({name,branch,year})
    console.log(req.file.filename)
    const newsetImage = await Profile.create({
        branch,
        image,
        name,
        year,
        rollNo,email
    });
    res.status(201).json(newsetImage);

     

}
catch(error){
    console.log(error)
   
}




}
exports.getprofile=async(req,res)=>{
try{
    console.log("profile called")
    const {rollNo}=req.body;
    console.log("roll",rollNo)
    const uploads = await Profile.find({rollNo})
    console.log("uplaods is",uploads)        
    res.status(200).json(uploads);
}
catch(err){
    res.status(500).json({ error: err.message });
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
      res.status(500).json({ error: 'Server error' });
    }
  };
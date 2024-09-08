const Rolesignup = require("../models/rolesignup");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookie = require("cookie-parser");
exports.rolesignup = async (req, res) => {
  try {
    
    const role = req.body.role;
    const rollNo = req.body.rollNo;
    const password = req.body.password;
    


    const existingUser = await Rolesignup.findOne({ rollNo });
    
    if (existingUser != null) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const registerstudent = Rolesignup.create({
      role,
      rollNo,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "sucs ",
    });

  } catch (err) {
    console.log(err, "err from backened", err);
  }
};

exports.rolesignin = async (req, res) => {
  try {
  

    const rollNo = req.body.rollNo;
    const password = req.body.password;
     
  
    const user = await Rolesignup.findOne({ rollNo });
    //console.log(user._id);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({rollNo }, process.env.SECRET_KEY, { expiresIn: '12h' });
    res.status(200)
      .json(token);
    
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
   
  }
};

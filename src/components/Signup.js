import React, { useState } from 'react';
import axios from  'axios' 
import './Signup.css'; // Create a CSS file for styling
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {
  const navigate=useNavigate();
  const [role, setRole] = useState('student');
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
 
  
  
  const handlesignup = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3600/api/signup",{role,rollNo,password})
      .then(result=>{console.log("result is",result)})
        alert(('success redirected to signin'))
        navigate('/signin')
     
    } catch (error) {
     
       alert("Something Wrong ")
    }
  };

  return (
    <>
    <h1 ><Link className='home' to="/">ABC COLLEGE</Link></h1>
    
    <div className='signupcontainer'>
 

    <div className="signup-page">

        <div className="signup-left">
          <h1>Welcome to Our College</h1>
          <p>"Unlock the door to your future with a single step—sign up to get started!"</p>
        </div>
    

        <div className="signup-right">
       
         <h1>College Website SignUp</h1>
          <div className="signup-form">
          <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Signup</h2>
          <form onSubmit={handlesignup}>
            <label>Role:</label>
            <select className="select-opt"value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>
            <label>Roll No:</label>
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="submitbtn"type="submit">Signup</button>
          </form>
         
        </div>

      </div>

     </div>

    </div>
    </>
  );
};

export default Signup;

import React, { useState } from 'react';
import axios from  'axios' 
//import './Singin.css'; // Create a CSS file for styling



const Signup = () => {
  const [role, setRole] = useState('student');
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setmsg] = useState('');
  
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3600/api/signup",{role,rollNo,password})
      .then(result=>{console.log("result is",result)})
       .then(setmsg('success reg go back to login'))
      
     
    } catch (error) {
      if(error.response.status==400){
      alert("username already taken")
      }
    }
  };

  return (
    <div className="login-page">
      <h1>College Website Signin</h1>
      <div className="login-container">
        <div className="login-form">
          <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
          <form onSubmit={handleLogin}>
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
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
            <button type="submit">Login</button>
          </form>
          {
            msg
          }
        </div>
      </div>
    </div>
  );
};

export default Signup;

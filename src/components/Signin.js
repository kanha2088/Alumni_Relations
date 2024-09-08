import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signin.css'; // Make sure to import the CSS file

const Signin = () => {
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3600/api/signin", { rollNo, password }).then(
        (result)=>{
          console.log("response is",result.data);
          localStorage.setItem('token',result.data);}
      );
      
      navigate('/dashboard');
      
    } catch (error) {
      alert("Login failed. Please check your roll number and password.", error);
    }
  };

  return (
    <>
    <h1 ><Link className='home' to="/">ABC COLLEGE</Link></h1>
    <div className="login-page">
      
      <div className="login-container">


        <div className="login-left">
          <h1>Welcome to Our College</h1>
          <p>"Unlock the door to your future with a single step—sign in to get started!"</p>
        </div>

        <div className="login-right">

          <h1>College Website Signin</h1>

          <div className="login-form">
            <form onSubmit={handleLogin}>
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
            <div className="signup-link">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
          </div>


        </div>

      </div>

    </div>
    </>
  );
};

export default Signin;

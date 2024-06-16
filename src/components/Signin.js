import React, { useState } from 'react';
import axios from 'axios';
//import './Signin.css'; // Correct file path
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3600/api/signin", { rollNo, password });
      console.log(response);
      navigate('/dashboard', { state: { rollNo } });
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your roll number and password.");
    }
  };

  return (
    <div className="login-page">
      <h1>College Website Signin</h1>
      <div className="login-container">
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
        </div>
      </div>
    </div>
  );
};

export default Signin;

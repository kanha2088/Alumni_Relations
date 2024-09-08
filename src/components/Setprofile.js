// src/ProfileSetup.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Setprofile.css';  // Import the CSS file

const Setprofile = () => {
  const token = localStorage.getItem("token");
  const [storedtoken, setToken] = useState(token || "");
  console.log(token,"token mil gaya")
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [setimage, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name,setimage,branch,email)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("year", year);
    formData.append("branch", branch);
    formData.append("setimage", setimage);
    formData.append("email", email);
    formData.append("storedtoken", storedtoken);
     
    try {
      const response = await axios.post(`http://localhost:3600/api/setprofile`,  formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
      alert("Successfully created Profile");
      navigate('/signin');
    } catch (error) {
      console.log(error);
      alert("Failed to create profile");
    }
  };

  return (


    <div className="setcontainer">

    <div className="profile-setup-container">
      <h2 className="profile-setup-title">Profile Setup</h2>
      <form onSubmit={handleSubmit} className="profile-setup-form">
        <div>
          <label className="profile-setup-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="profile-setup-input"
          />









          
        </div>
        <div>
          <label className="profile-setup-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="profile-setup-input"
          />
        </div>
        <div>
          <label className="profile-setup-label">Year:</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            className="profile-setup-input"
          />
        </div>
        <div>
          <label className="profile-setup-label">Branch:</label>
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
            className="profile-setup-input"
          />
        </div>
        <div>
          <label className="profile-setup-label">Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="profile-setup-input"
          />
        </div>
        <button type="submit" className="profile-setup-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Setprofile;

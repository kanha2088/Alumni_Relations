import React, { useState,useContext } from 'react';
import axios from 'axios';

import {Link ,useParams} from 'react-router-dom'
const ProfileEdit = () => {

  

  const {profileid}=useParams();
  console.log(profileid)
  
  const [profile, setProfile] = useState({
    name: '',
    image: '',
    year: '',
    branch: '',
    profileid:profileid
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(profile);
      const response = await axios.post(`http://localhost:3600/api/editprofile`, profile);
      console.log('Profile updated:', response.data);
      // Optionally redirect or show success message
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile-edit">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
        />
      
        <label>Year:</label>
        <input
          type="number"
          name="year"
          value={profile.year}
          onChange={handleChange}
          required
        />
        <label>Branch:</label>
        <input
          type="text"
          name="branch"
          value={profile.branch}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileEdit;

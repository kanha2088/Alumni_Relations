// src/ProfileSetup.js
import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RollNoContext } from './RollNoContext'; 
import axios from 'axios';


const Setprofile = ({rollNo}) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [setimage, setImage] = useState(null);
  const [title, settitle] = useState("");
  const [email, setemail] = useState("");
const navigate=useNavigate();

console.log(rollNo)
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // console.log({ name, year, branch, setimage });
    const formData = new FormData();
    formData.append('name', name); // Append rollNo to formData
    formData.append('year', year);
    formData.append('setimage', setimage);
    formData.append('branch', branch);
    formData.append('rollNo', rollNo);
    formData.append('email', email);
    try {
        const response = await axios.post(`http://localhost:3600/api/setprofile`,formData)
        .then(result=>{
           console.log(result);
          
          
        })
        .then(settitle("Refresh the page again!!! Thank You"))
        
        
          } catch (error) {
       
     
        console.log(error)
        alert("fail")
        
      }
  };

  return (




    <div>


    <h2>{



      title?(title):(<div>
        <h2>Profile Setup</h2>



<form onSubmit={handleSubmit}>
  <div>
    <label>Name:</label>
    <input 
      type="text" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      required 
    />
  </div>
  <div>
    <label>Email:</label>
    <input 
      type="email" 
      value={email} 
      onChange={(e) => setemail(e.target.value)} 
      required 
    />
  </div>
  <div>
    <label>Year:</label>
    <input 
      type="Number" 
      value={year} 
      onChange={(e) => setYear(e.target.value)} 
      required 
    />
  </div>
  <div>
    <label>Branch:</label>
    <input 
      type="text" 
      value={branch} 
      onChange={(e) => setBranch(e.target.value)} 
      required 
    />
  </div>
  <div>
    <label>Image:</label>
    <input 
      type="file" 
     
      onChange={(e) => setImage(e.target.files[0])} 
      required 
    />
  </div>
  <button type="submit">Submit</button>
</form>
<h2>Set Profile To redirect To DashBoard</h2>
      </div>)




      }</h2>


      
     
    </div>
  );
};

export default Setprofile;

import React, { useState, useContext } from 'react';
import axios from 'axios';

import './Myupload.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

export const UploadForm = () => {

    const navigate=useNavigate();
    const[token,settoken]=useState('');     
     
     
    if(token==''){
        const storedtoken=localStorage.getItem('token');
        settoken(storedtoken);
    }
  const n=localStorage.getItem('Info');
  
  const name=JSON.parse(n).name;   
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    
    const createdAt = new Date();
   
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('token', token); // Append rollNo to formData
        formData.append('description', description);
        formData.append('image', image);
        formData.append('date', createdAt);
        formData.append('name', name);

        

        try {
            const response = await axios.post('http://localhost:3600/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
           
            alert("Success");
            navigate(-1);
            // Handle success behavior
        } catch (error) {
            console.error('Error uploading:', error);
            alert("Fail");
            // Handle error behavior
        }
    };

    return (
        <div className="socio-upload-container">
            <div className='socioform'>
            <h2>Upload Form</h2>
            <form className="socio-upload-form" onSubmit={handleSubmit}>
                <div>
                    <label>Description:</label>
                    <textarea type="text" value={description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" onChange={handleImageChange} />
                </div>
                <button type="submit">Upload</button>
            </form>
            </div>
        </div>
    );
};



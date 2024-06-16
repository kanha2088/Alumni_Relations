import React, { useState, useContext } from 'react';
import axios from 'axios';
import { RollNoContext } from './RollNoContext';
//import './Myupload.css'; // Import the CSS file

const UploadForm = () => {
    const { rollNo,profileid } = useContext(RollNoContext);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const createdAt = new Date();
    console.log(profileid)
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('rollNo', rollNo); // Append rollNo to formData
        formData.append('description', description);
        formData.append('image', image);
        formData.append('date', createdAt);
        formData.append('profileid', profileid);

        try {
            const response = await axios.post('http://localhost:3600/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Upload successful:', response.data);
            alert("Success");
            // Handle success behavior
        } catch (error) {
            console.error('Error uploading:', error);
            alert("Fail");
            // Handle error behavior
        }
    };

    return (
        <div className="socio-upload-container">
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
            <div></div>
        </div>
    );
};

export default UploadForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import './Allpost.css'; // Import the CSS file

const Allpost = (email) => {
  const [uploads, setUploads] = useState([{}]);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get('http://localhost:3600/api/alluploads');
        const sortedUploads = response.data;
        setUploads(sortedUploads);
      } catch (error) {
        console.error('Error fetching uploads:', error);
      }
    };

    fetchUploads();
  }, []);
  
    
    
    
  return (
    <div className="socio-allpost-container">
      <h1>All Uploads</h1>
     {/* {uploads.length !== 0 ?console.log(uploads[0].profileid.name):(console.log('nothing'))} */}
      {uploads.length === 0 ? (
        <p>No uploads found</p>
      ) : (
        <ul className="socio-upload-list">
        {(() => {
          const uploadItems = [];
          for (let i = 0; i < uploads.length; i++) {
            const upload = uploads[i];
            const profileName = upload.profileid ? upload.profileid.name : 'Profile Name Not Available'; // Handle case where profileid or name is undefined
      
            uploadItems.push(
              <li key={upload._id}>
                {console.log(upload.profileid)} {/* Console log for debugging */}
                <p>{upload.description}</p>
                <p>{(new Date(upload.createdAt)).toLocaleString()}</p>
                <Link to={`/profile/${upload.rollNo}/getroll`}><p>{upload.rollNo}</p></Link>
                <img 
                  src={`http://localhost:3600/uploads/${upload.image}`} 
                  alt={upload.description} 
                  width="200" 
                />
                <p>{profileName}</p> {/* Display profile name */}
              </li>
            );
          }
          return uploadItems;
        })()}
      </ul>
      
      )}
    </div>
  );
};

export default Allpost;

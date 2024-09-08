import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Allpost.css'; // Import the CSS file

const Allpost = () => {
  const [uploads, setUploads] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const MAX_LENGTH = 1000;

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
    <div className="allpost-container">
      <h1>All Uploads</h1>
      {uploads.length === 0 ? (
        <p>No uploads found</p>
      ) : (
        <ul className="allpost-upload-list">
          {uploads.map((upload) => (
            <li key={upload._id} className="allpost-item">
              <div className='allpost-item-left'>
              <Link to={`/getprofile/${upload.rollNo}`} className="allpost-profile-link">
                <p className="allpost-name">{upload.name}</p>
                </Link>
                <p>
                  {upload.description.length > MAX_LENGTH
                    ? (expandedItems[upload._id] ? upload.description : upload.description.substring(0, MAX_LENGTH) + '...')
                    : upload.description}
                </p>
                {upload.description.length > MAX_LENGTH && (
                  <button onClick={() => toggleExpand(upload._id)}>
                    {expandedItems[upload._id] ? 'Read Less' : 'Read More'}
                  </button>
                )}
                <p className="allpost-timestamp">{moment(upload.createdAt).fromNow()}</p>
              
              </div>
              <div className='allpost-item-right'>
                <img
                  src={`http://localhost:3600/uploads/${upload.image}`}
                  alt={upload.description}
                  width="200"
                  className="allpost-image"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Allpost;

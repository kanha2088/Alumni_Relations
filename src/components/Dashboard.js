import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Allpost from './Allpost';
import Setprofile from './Setprofile';
import Myupload from './Myupload';
import axios from 'axios';
import { RollNoContext } from './RollNoContext';
//import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const location = useLocation();
  const { rollNo, setRollNo, profileid ,setprofileid } = useContext(RollNoContext);
  const [upload, setUpload] = useState(true);
  const [profiledata, setProfile] = useState({});

  useEffect(() => {
    if (location.state && location.state.rollNo) {
      setRollNo(location.state.rollNo);
    }
  }, [location, setRollNo]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (rollNo) {
        try {
          const response = await axios.post('http://localhost:3600/api/getprofile', { rollNo });
          setProfile(response.data[0]);
          setprofileid(response.data[0]);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      }
    };
    fetchProfile();
  }, [rollNo]);

  const uploadHandler = () => {
    setUpload(!upload);
  };
  
  return (
    <div className="socio-container">
      {console.log("profileid",profileid)};
      <div className="socio-header">
        <h1>Dashboard</h1>
      </div>
      <div className="socio-content">
        {!profiledata ? (
          <Setprofile rollNo={rollNo} />
        ) : (
          <>
            <div className="socio-sidebar">
              <div className="socio-profile-info">
              <p><strong>Name:</strong> {profiledata._id}</p>
                <p><strong>Name:</strong> {profiledata.name}</p>
                <p><strong>Branch:</strong> {profiledata.branch}</p>
                <p><strong>Year:</strong> {profiledata.year}</p>
                {profiledata.image && (
                  <img 
                    src={`http://localhost:3600/uploads/${profiledata.image}`} 
                    alt={profiledata.description || 'Image'} 
                    width="200"
                  />
                )}
              </div>
              <Link className="socio-link-button" to={`/profile/${rollNo}`}>My Profile</Link>
             
              <Link className="socio-link-button" to={`/editprofile/${profileid}`}>Edit Profile</Link>
            </div>
            <div className="socio-main-content">
              <h1>Welcome to the Dashboard!</h1>
              <p>Roll No: {rollNo}</p>
              <button className="socio-button" onClick={uploadHandler}>Upload</button>
              <button className="socio-button" onClick={uploadHandler}>All</button>
              {upload ? <Allpost email={profiledata.email}/> : <Myupload />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

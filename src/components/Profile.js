import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { rollNo } = useParams();
  const [uploads, setUploads] = useState([]);
  const [profiledata, setProfile] = useState(null);


  useEffect(() => {
    const fetchProfile = async () => {
      if (rollNo) {
        try {
          const response = await axios.post(
            "http://localhost:3600/api/getprofile",
            { rollNo }
          );
          setProfile(response.data[0]);

          console.log(response.data[0]);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      }
    };
    const fetchUploads = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3600/api/myuploads",
          { rollNo }
        );
        const sortedUploads = response.data;
        console.log(sortedUploads);
        setUploads(sortedUploads);
      } catch (error) {
        console.error("Error fetching uploads:", error);
      }
    };

    fetchProfile();
    fetchUploads();
  }, []);

  return (
    <div>
      <div className="socio-profile-info">{/*  */}</div>
      <h1>My Uploads</h1>
      <p>
        {profiledata ? (
          <div>
            <p>
              <strong>Name:</strong> {profiledata._id}
            </p>
            <p>
              <strong>Name:</strong> {profiledata.name}
            </p>
            <p>
              <strong>Branch:</strong> {profiledata.branch}
            </p>
            <p>
              <strong>Year:</strong> {profiledata.year}
            </p>
            <p>
              <strong>Year:</strong> {profiledata.email}
            </p>
            {profiledata.image && (
              <img
                src={`http://localhost:3600/uploads/${profiledata.image}`}
                alt={profiledata.description || "Image"}
                width="200"
              />
            )}{" "}
          </div>
        ) : (
          ""
        )}
      </p>
      {uploads.length === 0 ? (
        <p>No uploads found</p>
      ) : (
        <ul>
          {uploads.map((upload) => (
            <li key={upload._id}>
              {upload._id}
              <p>{upload.description}</p>
              <p>{upload.createdAt}</p>
              <Link to="/profile">
                <p>{upload.rollNo}</p>
              </Link>
              <img
                src={`http://localhost:3600/uploads/${upload.image}`}
                alt={upload.description}
                width="200"
              />
            </li>
          ))}
        </ul>
      )}

     
    </div>
  );
};

export default Profile;

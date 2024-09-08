import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Allpost from "./Allpost";
import Setprofile from "./Setprofile";
import Myupload from "./Myupload";
import axios from "axios";

import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [upload, setUpload] = useState(true);
  const [profileData, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken || "");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3600/api/getprofile",
          { token }
        );
        console.log(response.data.uploads, "response is ");

        if (response.data.message !== "Enter details") {
          const obj = {
            name: response.data.uploads.name,
            id: response.data.uploads.rollNo,
            branch: response.data.uploads.branch,
            email: response.data.uploads.email,
          };
          localStorage.setItem("Info", JSON.stringify(obj));
          setProfile(response.data.uploads);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Stop loading once the data is fetched
      }
    };

    fetchProfile();
  }, [token]);

  const uploadHandler = () => {
    navigate("/upload")
  };

  const logout = () => {
    alert("Logged out");
    localStorage.removeItem("token");
    navigate("/");
  };

  const home = () => {
    navigate("/");
  };

  if (loading) {
    return <div className="loading">Loading...</div>; // Loading indicator
  }

  return (
    <div>
      <div className="dashboard-main">
        {profileData === null ? (
          <Setprofile token={storedToken} />
        ) : (
          <div className="Dashboardsecondpage">
            <div className="dashboard-sidebar">
              <h2 className="capitalize">{profileData.name}</h2>

              <Link className="link-button" to={'/myprofile'}>
                My Profile
              </Link>

              <button className="dashboard-button" onClick={home}>
                Home
              </button>
              <button className="dashboard-button" onClick={uploadHandler}>
                Upload
              </button>
              <button className="dashboard-button-logout" onClick={logout}>
                Logout
              </button>
            </div>

            <div>
              <h1 className="Dashboardsecondpagecontent"> Dashboard</h1>

              <div className="main-content">
                {<Allpost /> }
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css"; // Import your CSS file for Home

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
                    <div className="navbar">
                      <div className="navbar-left">
                        <p>Abc college</p>
                      </div>
                      <div className="navbar-right">
                        <Link to="/signup" className="nav-link">
                          Register
                        </Link>
                        <Link to="/signin" className="nav-link">
                          Sign In
                        </Link>
                      </div>
                    </div>

                    <div className="college-info">
      <div className="college-text">
        <h1>ABC College</h1>
        <p>
          ABC College is a prestigious institution known for its academic excellence and vibrant campus life. Our alumni network spans across the globe, and we offer a wide range of courses designed to equip students with the skills and knowledge they need to succeed.
        </p>
      </div>
    </div>







    </div>
  );
}

export default Home;

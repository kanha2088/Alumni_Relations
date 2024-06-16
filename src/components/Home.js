import React from 'react';
import { Link } from 'react-router-dom';
//import './Home.css'; // Import your CSS file for Home

function Home() {
  return (
    <div className="Home">
      <h1 className="college-name">ABC College</h1>
      <div className="central-section">
        
        <p className="college-description">
          ABC College is a renowned institution offering a variety of courses with a strong reputation for academic excellence. Our alumni network is vast, and students are encouraged to register to maintain connections.
        </p>
        <p className="signup-description">
          Sign up to join our alumni relations website where you can connect with fellow alumni, stay updated with college news, and access exclusive resources.
        </p>
      </div>
      <div className="auth-section">
        <div className="auth-box">
          <h2 className="auth-title">Sign In</h2>
          <p className="auth-description">
            Sign in to access your personalized dashboard. Stay connected with alumni, join exclusive events, and take advantage of networking opportunities.
          </p>
          <Link to="/signin" className="auth-button">Sign In</Link>
        </div>
        <div className="auth-box">
          <h2 className="auth-title">Sign Up</h2>
          <p className="auth-description">
            Sign up to join our alumni network, stay updated with college news, and access exclusive resources.
          </p>
          <Link to="/signup" className="auth-button">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

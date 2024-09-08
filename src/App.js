import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Profile from './components/Profile';
import Setprofile from './components/Setprofile';
import Editprofile from './components/Editprofile';

import { RollNoProvider } from './components/RollNoContext';
import './App.css'; // Import your CSS file
import Navbar from './components/Navbar';
import { Myprofile } from './components/Myprofile'
import { UploadForm } from './components/Myupload'

function App() {
  
  return (
    <>
   
    <RollNoProvider>
        
      <Router>
       
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
             
            <Route path="/getprofile/:rollNo" element={<Profile />} />
            <Route path="/setprofile" element={<Setprofile />} />
            <Route path="/myprofile" element={<Myprofile />} />
            <Route path="/upload" element={<UploadForm />} />
            <Route path="/editprofile/:profileid" element={<Editprofile />} />
    
          </Routes>
      </Router>
    </RollNoProvider>
    </>
  );
}

export default App;

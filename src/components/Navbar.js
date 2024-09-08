import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navigation = () => {
    navigate('/signup');
  }

  return (
    <>
      <div>Navbar</div>
      <button onClick={navigation}>NEW Signup</button>
    </>
  );
}

export default Navbar;

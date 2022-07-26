import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">Hotel Booking</div>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

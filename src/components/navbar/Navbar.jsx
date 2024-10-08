import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container navbar">
        <div className="logo">
          <img src="./src/assets/logo.svg" alt="Logo" />
          <h1>LaslesVPN</h1>
        </div>
        <div className="navigation">
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="login">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

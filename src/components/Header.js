import React from "react";
import profilePic from "../assets/profile.jpg"; // Update path as needed

const Header = () => (
  <header className="hero-header">
    <img src={profilePic} alt="Eddie Woods" className="hero-photo" />
  </header>
);

export default Header;

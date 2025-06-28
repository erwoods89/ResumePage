import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="footer">
    <a href="mailto:erwoods89@gmail.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faEnvelope} /> Email
    </a>
    <span>&nbsp;|&nbsp;</span>
    <a href="www.linkedin.com/in/eddierwoods" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
    </a>
  </footer>
);

export default Footer;

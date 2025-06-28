import React, { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        ☰
      </button>
      {open && (
        <ul className="dropdown-menu">
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
          <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#footer" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;


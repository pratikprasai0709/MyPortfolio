import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo portfolio white.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <a className="navbar-brand" href="#home" onClick={closeMenu} aria-label="Pratik Prasai, home">
        <img src={logo} alt="Pratik Prasai" />
      </a>

      <nav className="nav-elements" aria-label="Main navigation">
        <ul id="main-menu" className={open ? "active" : ""}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>My Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
        </ul>
      </nav>

      <a className="btn cv-button" href={`${process.env.PUBLIC_URL}/pratik.pdf`} download>
        Download CV
      </a>

      <button
        className="toggle-icon"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>
    </header>
  );
};

export default Navbar;


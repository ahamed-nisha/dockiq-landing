// src/components/Navbar.jsx
import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>DockIQ</h1>
      </div>
      <div className="navbar-links">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <a
          href="https://github.com/oslabs-beta/DockIQ"
          target="_blank"
          className="nav-link"
        >
          Documentation
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

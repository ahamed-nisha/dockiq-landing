import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo" onClick={handleLogoClick}>
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
    </div>
  );
};

export default Navbar;

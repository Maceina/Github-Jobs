import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/desktop/logo.svg";
import iconMoon from "../assets/desktop/icon-moon.svg";
import iconSun from "../assets/desktop/icon-sun.svg";

function Header({ setTheme, handleHome }) {
  function handleTheme(event) {
    setTheme(event.target.value);
  }
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/">
            <img src={logo} alt="githubt jobs" onClick={handleHome} />
          </Link>
          <div className="theme-toggle-container">
            <label htmlFor="light" className="toggle-label sun">
              <img src={iconSun} alt="sun" />
            </label>

            <input
              type="radio"
              name="theme"
              value="light"
              id="light"
              defaultChecked
              onChange={handleTheme}
            />
            <input
              type="radio"
              name="theme"
              value="dark"
              id="dark"
              onChange={handleTheme}
            />
            <div className="toggle-pill"></div>

            <label htmlFor="dark" className="toggle-label">
              <img src={iconMoon} alt="moon" />
            </label>

            <span className="theme-toggle"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

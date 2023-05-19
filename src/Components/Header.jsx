import React from "react";
import "./Header.css";
import logo from "../assets/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="main-content">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happening</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;

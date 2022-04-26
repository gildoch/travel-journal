import React from "react";
import "./NavBar.css";
import logo from "../img/logo.png";

function NavBar(props) {
  return (
    <nav className="container-fluid">
      <div className="n-wrapper">
        <img src={logo} alt="logo-image" className="n-logo" />
        <h3 className="n-name">My Travel Journal</h3>
      </div>
    </nav>
  );
}

export default NavBar;

import React, { Component } from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <nav>
      <div className="n-wrapper">
        <img src="/images/logo.png" alt="" className="n-logo" />
        <h3 className="n-name">My Travel Journal</h3>{" "}
      </div>
    </nav>
  );
}

export default NavBar;

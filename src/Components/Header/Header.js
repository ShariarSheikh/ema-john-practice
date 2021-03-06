import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="header-logo" />
      <ul>
        <Link to="/">
          <li className="link">Shop</li>
        </Link>
        <Link to="/review">
          <li className="link">Order Review</li>
        </Link>
        <Link to="manage">
          <li className="link">Manage Inventory Here</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;

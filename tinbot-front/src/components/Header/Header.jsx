import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <Nav className="header">
        <Link className="header-link" to="/">
          Accueil
        </Link>
        <Link className="header-link" to="/rencontre">
          Rencontre
        </Link>
        <Link className="header-link" to="/contact">
          Contact
        </Link>
      </Nav>
    </div>
  );
}

export default Header;

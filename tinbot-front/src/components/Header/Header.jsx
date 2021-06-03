import React from "react";
import { Nav, NavLink } from "reactstrap";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <Nav className="header">
        <NavLink className="header-link" href="/">
          Accueil
        </NavLink>
        <NavLink className="header-link" href="rencontre">
          Rencontre
        </NavLink>
        <NavLink className="header-link" href="/contact">
          Contact
        </NavLink>
      </Nav>
    </div>
  );
}

export default Header;

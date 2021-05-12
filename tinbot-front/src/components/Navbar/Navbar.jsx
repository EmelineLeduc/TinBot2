import React from "react";
import { Nav, NavLink } from "reactstrap";
import "./Navbar.css";

function Header(props) {

  return (

    <div>
      <Nav className="navbar">
        <NavLink className="navbar-link" href="/">
          Accueil
        </NavLink>
        <NavLink className="navbar-link" href="rencontre">
          Rencontre
        </NavLink>
        <NavLink className="navbar-link" href="/contact">
          Contact
        </NavLink>
      </Nav>
    </div>
  );
}

export default Header;

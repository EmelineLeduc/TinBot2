import React from "react";
import { Nav, NavLink } from "reactstrap";
import "./Navbar.css";

function Header(props) {
  // const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   let y = window.scrollY;
  //   if (y >= 70) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", changeBackground);
  return (
    // <Navbar
    //   className={navbar ? "navbar active" : "navbar"}
    //   collapseOnSelect
    //   expand="sm"
    //   fixed="top"
    // >
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav" expand="lg">
    //     <Nav className="ml-auto">
    //       <Nav.Link className="navbar-link" href="#" style={navigation}>
    //         Accueil
    //       </Nav.Link>
    //       <Nav.Link href="#" style={navigation}>
    //         Rencontre
    //       </Nav.Link>
    //       <Nav.Link href="#" style={navigation}>
    //         Evènements
    //       </Nav.Link>

    //       <NavDropdown title="Theme" id="collasible-nav-dropdown">
    //         <NavDropdown.Item
    //           onClick={() => props.changeWord("light")}
    //           id="changeTheme"
    //         >
    //           Light
    //         </NavDropdown.Item>
    //         <NavDropdown.Item
    //           onClick={() => props.changeWord("dark")}
    //           id="changeTheme"
    //         >
    //           Sombre
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //       <Nav.Link href="#contact" style={navigation}>
    //         Contact
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <div>
      <Nav className="navbar">
        <NavLink className="navbar-link" href="/">
          Accueil
        </NavLink>
        <NavLink className="navbar-link" href="rencontre">
          Rencontre
        </NavLink>
        <NavLink className="navbar-link" href="#">
          Contact
        </NavLink>
      </Nav>
    </div>
  );
}

export default Header;

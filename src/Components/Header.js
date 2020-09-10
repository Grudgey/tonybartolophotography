import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';


function Header() {
    return <Navbar variant="dark" expand="lg">
    <Navbar.Brand href="#home"><h1>TONY BARTOLO PHOTOGRAPHY</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home" >ABOUT</Nav.Link>
        <Nav.Link href="#link" >CONTACT</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Divider />
        </NavDropdown> */}
      </Nav>

    </Navbar.Collapse>
  </Navbar>
}

export default Header;
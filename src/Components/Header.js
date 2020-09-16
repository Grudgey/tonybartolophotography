import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header() {
    return <Navbar variant="dark" expand="lg">
    <Navbar.Brand href="#home"><h1>TONY BARTOLO PHOTOGRAPHY</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="mailto:tony@snazmusic.com">CONTACT</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
}

export default Header;

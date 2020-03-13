import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../assets/brandblack.svg'
import '../css/headerNavBar.css'


function HeaderNavBar() {
  return (
    <header>
      <Navbar className='headerNavBar fixed-top'>
        <Navbar.Brand href="#home">
          <img
            alt="Tesla, Inc."
            src={Logo}
            width="100"
            height="26"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Model s</Nav.Link>
          <Nav.Link href="#features">Model 3</Nav.Link>
          <Nav.Link href="#pricing">Model x</Nav.Link>
          <Nav.Link href="#features">Model y</Nav.Link>
          <Nav.Link href="#pricing">Solar roof</Nav.Link>
          <Nav.Link href="#pricing">Solar panels</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#home">Shop</Nav.Link>
          <Nav.Link href="#features">Sing in</Nav.Link>
          <Nav.Link href="#features"><i class="fas fa-camera"></i> as</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default HeaderNavBar;

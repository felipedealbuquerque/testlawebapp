import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../assets/brandblack.svg'
import '../css/headerNavBar.css';

function Footer() {
  return (
    <footer>
      <Nav as="ul" className='footer-centered'>
        <Nav.Item as="li">
          <Nav.Link href="#">Tesla © 2020</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#">Privacy & Legal</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#">Careers</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#">Get Newsletter</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#">Forums</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#">Locations</Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
}

export default Footer;

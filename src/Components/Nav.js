import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap";
import { FiHome, FiPlusCircle } from "react-icons/fi";


function BasicNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className='mb-5'>
      <Container className="container-fluid">
        <Navbar.Brand>PHP Api</Navbar.Brand>
        <Nav className="justify-content-end">
            <Nav.Link><Link to="/" className="nav-link-btn"><FiHome /></Link></Nav.Link>
            <Nav.Link><Link to="/create" className="nav-link-btn"><FiPlusCircle /></Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default BasicNavbar;
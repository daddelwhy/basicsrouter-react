import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

function MYNavbar() {
  return (
    <Navbar className="navBg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Logo_de_Free.png" alt="" className="logo"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/about"}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to={"/blogs"}>
            Blogs
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MYNavbar;

// Imports

// - - - React - - -
import React from "react";

// - - - Custom - - -


// - - - Library React Bootstrap - - -
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// - - - CSS Files - - -
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css";

// Esta funcion muestra el NavBar, con su logo, las diferentes categorias
// a las que se puede navegar y la imagen del carrito
export default function NavBar() {
  return (
    <div>
      <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LucasTisser</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Sobre mi</Nav.Link>
            <Nav.Link href="#link">Habilidades</Nav.Link>
            <Nav.Link href="#link">Proyectos</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
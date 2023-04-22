// - - - React - - -
import React from "react";

// - - - Custom - - -

// - - - Library React Bootstrap - - -
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
      <Navbar className="navBarContainer" expand="lg">
        <Navbar.Brand className="logo" href="#home">Lucas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navItemsContainer" id="basic-navbar-nav">
          <Nav className="navItems me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutMe">Sobre mi</Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#proyects">Proyectos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


const Menu = () =>{
    return(
    <Navbar bg="primary" variant="dark" className="rounded">
    <Container>
      <Navbar.Brand as={Link} to="/">Grupo 9</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
          <Nav.Link as={NavLink} to="/Lista-Alumnos">Lista de Alumnos</Nav.Link>
          <Nav.Link as={NavLink} to="/Agregar-Alumno">Agregar Alumno</Nav.Link>
          <Nav.Link as={NavLink} to="/Nosotros">Nosotros</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default Menu
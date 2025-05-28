import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Fade,
  Badge
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Principal = () => {
  return (
    <Container className="mt-5">
      <Fade in={true}>
        <div className="text-center mb-5">
          <Card className="p-4 shadow-lg border-primary border-2 bg-light">
            <Card.Body>
              <Card.Title as="h1" className="display-4 text-primary">
                <strong>Bienvenidos a la Página Principal</strong>
              </Card.Title>
              <Card.Text className="lead">
                Esta aplicación fue creada como parte del Trabajo Práctico N.º 5 de Programación Visual.
              </Card.Text>
              <Card.Text>
                Usando <Badge bg="secondary">React</Badge>, <Badge bg="info">Vite</Badge> y <Badge bg="warning" text="dark">React Router DOM</Badge>, podés gestionar datos de alumnos: agregar, editar, eliminar y visualizar información detallada.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Fade>

      <Row>
        <Col md={6} className="mb-4">
          <Card border="primary" className="shadow-sm h-100 transition-hover">
            <Card.Body>
              <Card.Title className="text-primary">
                🛠️ Funciones principales
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>📋 Ver listado de alumnos</ListGroup.Item>
                <ListGroup.Item>🆕 Agregar nuevo alumno</ListGroup.Item>
                <ListGroup.Item>✏️ Editar datos existentes</ListGroup.Item>
                <ListGroup.Item>🔍 Ver detalle completo</ListGroup.Item>
                <ListGroup.Item>🗑️ Eliminar alumnos con confirmación</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card border="success" className="shadow-sm h-100 transition-hover">
            <Card.Body>
              <Card.Title className="text-success">
                ⚙️ Tecnologías utilizadas
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>✅ React + Vite</ListGroup.Item>
                <ListGroup.Item>✅ React Router DOM</ListGroup.Item>
                <ListGroup.Item>✅ Bootstrap 5</ListGroup.Item>
                <ListGroup.Item>✅ React-Bootstrap</ListGroup.Item>
                <ListGroup.Item>✅ Git y GitHub</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card border="info" className="shadow-sm h-100 transition-hover">
            <Card.Body>
              <Card.Title className="text-info">
                📚 Requisitos del Trabajo
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Crear proyecto con Vite + React</ListGroup.Item>
                <ListGroup.Item>Usar React Router DOM para navegación</ListGroup.Item>
                <ListGroup.Item>Manejar eventos sintéticos y nativos</ListGroup.Item>
                <ListGroup.Item>Usar componentes funcionales</ListGroup.Item>
                <ListGroup.Item>Redirecciones al guardar</ListGroup.Item>
                <ListGroup.Item>Diseño moderno con UI Framework</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card border="warning" className="shadow-sm h-100 transition-hover">
            <Card.Body>
              <Card.Title className="text-warning">
                🧠 Contenidos trabajados
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Eventos: onClick, onChange, onSubmit</ListGroup.Item>
                <ListGroup.Item>Props para emitir eventos</ListGroup.Item>
                <ListGroup.Item>Rutas dinámicas con parámetros</ListGroup.Item>
                <ListGroup.Item>Componentes reutilizables</ListGroup.Item>
                <ListGroup.Item>Manejo de arrays de alumnos</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Card border="dark" className="shadow-sm transition-hover">
            <Card.Body>
              <Card.Title className="text-dark">
                👥 Información del grupo
              </Card.Title>
              <Card.Text>
                Este trabajo fue realizado por estudiantes de la carrera <strong>Analista Programador Universitario</strong> de la <strong>Facultad de Ingeniería</strong>.
              </Card.Text>
              <Card.Text>
                El repositorio del proyecto debe estar en GitHub bajo el nombre: <code>pv_tp5_grupo9</code>
              </Card.Text>
              <Card.Text>
                Todos los cambios deben realizarse en ramas, y se debe incluir un archivo <code>README.md</code> con integrantes y sus usuarios de GitHub
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Link to="/Lista-Alumnos">
          <Button variant="outline-primary" size="lg">
            Ver Lista de Alumnos
          </Button>
        </Link>
      </div>
      <footer className="text-center mt-5 text-muted">
        © {new Date().getFullYear()} Grupo 9 - Todos los derechos reservados.
      </footer>

      <style>
        {`
          .transition-hover {
            transition: transform 1s ease, box-shadow 0.5s ease;
          }
          .transition-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 0.8rem 1.2rem rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </Container>
  );
};

export default Principal;
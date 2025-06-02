import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import AddAlumno from './AddAlumno';


const ListaAlumnos = ({ alumnos, agregarAlumno, editarAlumno, eliminarAlumno }) => {
  const [show, setShow] = useState(false);
  console.log(alumnos)
  console.log("llegaron")
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const handleClose = () => {
    setShow(false);
    setAlumnoSeleccionado(null);
  };

  const handleShow = (alumno) => {
    setAlumnoSeleccionado(alumno);
    setShow(true);
  };

  return (
    <>
      <Card body className='container col-10 col-sm-8 col-md-6 col-lg-7' style={{ alignItems: 'center', marginBottom: '10px', fontSize: '30px' }} >Lista de Alumnos</Card>
      <Accordion className='container col-10 col-sm-8 col-md-6 col-lg-7' defaultActiveKey="0" flush>
        {alumnos.length === 0 && <p>No hay alumnos cargados.</p>}
        {alumnos.map((alumno, index) => (
          <Accordion.Item eventKey={index} key={alumno.lu}>
            <Accordion.Header className='accordion-header'>
              <p><strong>LU:</strong> {alumno.lu}</p>
              <p className='accordion-header-parrafo' ><strong>Nombre:</strong> {alumno.nombre}</p>
              <p className='accordion-header-parrafo' ><strong>Apellido:</strong> {alumno.apellido}</p>
            </Accordion.Header>
            <Accordion.Body style={{ background: '#dbffb1' }} >
              <p><strong>Curso:</strong> {alumno.curso}</p>
              <p><strong>Teléfono:</strong> {alumno.telefono}</p>
              <p><strong>Mail:</strong> {alumno.mail}</p>
              <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
              <Button variant="primary" className='accordion-header-button edit' onClick={() => handleShow(alumno)} >Editar</Button>
              <Button variant="danger" className='accordion-header-button delete' onClick={() => eliminarAlumno(alumno.lu)} >Eliminar</Button>
            </Accordion.Body>
            <hr />
          </Accordion.Item>
        ))}
      </Accordion>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {alumnoSeleccionado && <p><strong>LU:</strong> {alumnoSeleccionado.lu}</p>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alumnoSeleccionado && (
            <AddAlumno
              modo="editar"
              alumno={alumnoSeleccionado}
              onAdd={agregarAlumno}
              onEdit={editarAlumno}
              onClose={handleClose}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ListaAlumnos;
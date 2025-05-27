import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const ListaAlumnos = ({ alumnos }) => {
  console.log(alumnos)
  console.log("llegaron los datos")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = (show,alumno) => {
    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p><strong>LU:</strong> {alumno.lu}</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>AGREGAR UN FORMULARIO PARECIDO AL ARCHIVO "AddAlumno.jsh cargado con la información del alumno elegido"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => {handleClose();/*Agregar aquí la función que actualiza un objeto del array que se ha pasado como props*/}}>
            Guardar cambios
          </Button>
        </Modal.Footer>
    </Modal>
    )
  };

  return(
    <>
    <Card body style={{ alignItems: 'center', marginBottom: '10px', fontSize: '30px' }} >Lista de Alumnos</Card>
    <Accordion defaultActiveKey="0" flush>
    {alumnos.length === 0 && <p>No hay alumnos cargados.</p>}
    {alumnos.map((alumno, index) => (
      <Accordion.Item eventKey={index}>
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
            <Button variant="primary" className='accordion-header-button edit' onClick={handleShow} >Editar</Button>
            {modal(show,alumno)}
            <Button variant="danger" className='accordion-header-button delete' onClick={() => {/*Agregar aquí la función que elimina un objeto del array que se ha pasado como props*/}} >Eliminar</Button>
        </Accordion.Body>
        <hr />
      </Accordion.Item>
      
    ))}
  </Accordion>
  </>
  )
}




export default ListaAlumnos;
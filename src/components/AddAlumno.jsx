import { useState, useEffect } from "react";
//import '../css/Add.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddAlumno = ({ onAdd, onEdit, modo = "agregar", alumno, onClose }) => {
  const [form, setForm] = useState(
    alumno || {
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    telefono: "",
    mail: "",
    domicilio: "",
  });

useEffect(() => {
    if (alumno) {
      setForm(alumno);
    }
  }, [alumno]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modo === "editar"){
      onEdit(form);
      alert(`Alumno '${form.nombre} ${form.apellido}' Editado Exitosamente!!`);
      if (onClose) onClose();
      setForm({ 
      lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      telefono: "",
      mail: "",
      domicilio: "",
      });
    } else {
      const agregado = onAdd(form)
      if(agregado) {
        alert(`Alumno '${form.nombre} ${form.apellido}' Agregado Exitosamente!!`)
        if(onClose) onClose();
        setForm({ 
        lu: "",
        nombre: "",
        apellido: "",
        curso: "",
        telefono: "",
        mail: "",
        domicilio: "",
      });
      }
      
    }
    console.log(form)
    console.log("el formulario se envio")
  };

  return (
    <Container className='container mt-3'>
      
      <Form onSubmit={handleSubmit} className='row justify-content-center '>
        <div className="col-10 col-sm-8 col-md-6 col-lg-6">

          {modo !== "editar" &&(
            <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputGroup className="mb-3">
            <Form.Control
              name="lu"
              placeholder="Libreta Universitaria"
              value={form.lu}
              onChange={handleChange}
              required
              pattern="^\d+$"
              title="Solo se aceptan Numeros!"
            />
          </InputGroup>
        </Form.Group>
          )}
        {modo === "editar" &&(
          <div className="mb-3">
            <strong>LU:</strong> {form.lu}
          </div>
        )}
        

        <Form.Group className="mb-3" controlId="formNombre">
          <InputGroup className="mb-3">
            <Form.Control
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              title="Solo se aceptar Letras!"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formApellido">
          <InputGroup className="mb-3">
            <Form.Control
              name="apellido"
              placeholder="Apellido"
              value={form.apellido}
              onChange={handleChange}
              required
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              title="Solo se aceptar Letras!"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCurso">
          <InputGroup className="mb-3">
            <Form.Control
              name="curso"
              placeholder="Curso"
              value={form.curso}
              onChange={handleChange}
              required
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              title="Solo se aceptar Letras!"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefono">
          <InputGroup className="mb-3">
            <Form.Control
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              required
              pattern="^\d+$"
              title="Solo números"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMail">
          <InputGroup className="mb-3">
            <Form.Control
            type="email"
              name="mail"
              placeholder="Mail"
              value={form.mail}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDomicilio">
          <InputGroup className="mb-3">
            <Form.Control
              name="domicilio"
              placeholder="Domicilio"
              value={form.domicilio}
              onChange={handleChange}
              required
              pattern="^(?=.*[A-Za-zÁÉÍÓÚáéíóúÑñ])(?=.*\d)[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s\.,º\-#]+$"
              title="La dirección debe contener letras y números"
            />
          </InputGroup>
        </Form.Group>
        <Button type="submit">
          {modo === "editar" ? "Editar Alumno" : "Agregar Alumno"}
        </Button >
        </div>
      </Form>
    </Container>
    
  );
};

export default AddAlumno;
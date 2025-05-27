import { useState } from "react";
//import '../css/Add.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddAlumno = ({ onAdd }) => {
  const [form, setForm] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    telefono: "",
    mail: "",
    domicilio: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form); // llama a la funcion por proms
    console.log(form)
    console.log("el formulario se envio")
    setForm({
      lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      telefono: "",
      mail: "",
      domicilio: "",
    });
    alert(`Alumno '${form.nombre} ${form.apellido}' Agregado Exitosamente!!`)
  };

  return (
    <Container className='container-product'  style={{}}>
      <Form onSubmit={handleSubmit} className='product-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputGroup className="mb-3">
            <Form.Control
              name="lu"
              placeholder="Libreta Universitaria"
              value={form.lu}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNombre">
          <InputGroup className="mb-3">
            <Form.Control
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
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
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMail">
          <InputGroup className="mb-3">
            <Form.Control
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
            />
          </InputGroup>
        </Form.Group>
        <Button type="submit">Agregar Alumno</Button >
      </Form>
    </Container>
  );
};

export default AddAlumno;
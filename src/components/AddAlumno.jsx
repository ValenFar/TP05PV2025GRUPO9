import { useState } from "react";
import '../css/Add.css'
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
    <div className='container-product'>
    <form onSubmit={handleSubmit} className='product-form'>
      
      <input
        name="lu"
        placeholder="Libreta Universitaria"
        value={form.lu}
        onChange={handleChange}
        required
      />
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        name="apellido"
        placeholder="Apellido"
        value={form.apellido}
        onChange={handleChange}
        required
      />
      <input
        name="curso"
        placeholder="Curso"
        value={form.curso}
        onChange={handleChange}
        required
      />
      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
        required
      />
      <input
        name="mail"
        placeholder="Mail"
        value={form.mail}
        onChange={handleChange}
        required
      />
      <input
        name="domicilio"
        placeholder="Domicilio"
        value={form.domicilio}
        onChange={handleChange}
        required
      />
      <button type="submit">Agregar Alumno</button>
    </form>
    </div>
  );
};

export default AddAlumno;
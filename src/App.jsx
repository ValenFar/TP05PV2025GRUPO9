import './css/App.css'
import Menu from './components/nav.jsx'
import AppRouter from './router/AppRouter.jsx'
import { useState } from 'react';

function App() {
  const [alumnos, setAlumnos] = useState([{ lu: "123456", nombre: "Juan", apellido: "Pérez", curso: "Ingeniería", telefono: "1234567890", mail: "juangP3@example.com", domicilio: "Calle Falsa 123" }, { lu: "654321", nombre: "Ana", apellido: "Gómez", curso: "Arquitectura", telefono: "0987654321", mail: "AnaG@example.com", domicilio: "Avenida Siempre Viva 456" }, { lu: "789012", nombre: "Luis", apellido: "Martínez", curso: "Medicina", telefono: "1122334455", mail: "martZ@example.com", domicilio: "Calle del Sol 789" }]);

  const agregarAlumno = (alumno) => {
    setAlumnos([...alumnos, alumno]);
  };

  return (
    <div>
      <div className='contenedor1'>
        <Menu/>
        <h1>Administración de Alumnos</h1>
        <AppRouter alumnos={alumnos} agregarAlumno={agregarAlumno} />
      </div>
    </div>
  )
}

export default App

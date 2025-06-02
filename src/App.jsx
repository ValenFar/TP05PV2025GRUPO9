import './css/App.css'
import Menu from './components/nav.jsx'
import AppRouter from './router/AppRouter.jsx'
import { useState } from 'react';


function App() {
  const [alumnos, setAlumnos] = useState([{ lu: "123456", nombre: "Juan", apellido: "Pérez", curso: "Ingeniería", telefono: "1234567890", mail: "juangP3@example.com", domicilio: "Calle Falsa 123" }, { lu: "654321", nombre: "Ana", apellido: "Gómez", curso: "Arquitectura", telefono: "0987654321", mail: "AnaG@example.com", domicilio: "Avenida Siempre Viva 456" }, { lu: "789012", nombre: "Luis", apellido: "Martínez", curso: "Medicina", telefono: "1122334455", mail: "martZ@example.com", domicilio: "Calle del Sol 789" }]);

  const agregarAlumno = (alumno) => {
    const existe = alumnos.some(al => al.lu === alumno.lu);
  if (existe) {
    alert("Ya existe un alumno con esa LU");
    return false;
  }
    setAlumnos([...alumnos, alumno]);
    return true;
  };

  const editarAlumno = (alumnoEditado) => {
    setAlumnos(alumnos.map(al =>
      al.lu === alumnoEditado.lu ? alumnoEditado : al
    ));
  };

  const eliminarAlumno = (lu) => {
    setAlumnos(alumnos.filter(al => al.lu !== lu));
  };  

  return (
    <div className='container-fluid bg-personalizado min-vh-100'> 
      <div className='container bg-personalizado p-3'>
        <Menu/>
      </div>

      <div className='container-fluid bg-personalizado'>
        <AppRouter
          alumnos={alumnos} 
          agregarAlumno={agregarAlumno}
          editarAlumno={editarAlumno}
          eliminarAlumno={eliminarAlumno}
          />
      </div>
    </div>
  )
}

export default App

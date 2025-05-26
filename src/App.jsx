import './css/App.css'
import Menu from './components/nav.jsx'
import AppRouter from './router/AppRouter.jsx'
import { useState } from 'react';

function App() {
  const [alumnos, setAlumnos] = useState([]);

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

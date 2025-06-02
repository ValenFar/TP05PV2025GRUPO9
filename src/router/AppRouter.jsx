import { Routes, Route } from 'react-router-dom'
import Principal from '../components/Principal'
import ListaAlumnos from '../components/ListaAlumnos'
import Error from '../components/error'
import Nosotros from '../components/nosotros'
import AddAlumno from '../components/AddAlumno'

const AppRouter = ({ alumnos, agregarAlumno, editarAlumno, eliminarAlumno }) =>{
    return(
        <div className='router'>
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path='/Lista-Alumnos' element={<ListaAlumnos alumnos={alumnos} agregarAlumno={agregarAlumno} editarAlumno={editarAlumno} eliminarAlumno={eliminarAlumno}/>} />
                <Route path='/Agregar-Alumno' element={<AddAlumno onAdd={agregarAlumno} />} />
                <Route path='/Nosotros' element={<Nosotros/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </div>
    )
}

export default AppRouter
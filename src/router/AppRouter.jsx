import { Routes, Route } from 'react-router-dom'
import Principal from '../components/Principal'
import Alumnos from '../components/ListaAlumnos'
import Error from '../components/error'
import Nosotros from '../components/nosotros'
import AddAlumno from '../components/AddAlumno'

const AppRouter = () =>{
    return(
        <div className='router'>
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path='/Lista-Alumnos'element={<Alumnos/>}/>
                <Route path='/Agregar-Alumno'element={<AddAlumno/>}/>
                <Route path='/Nosotros' element={<Nosotros/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </div>
    )
}

export default AppRouter
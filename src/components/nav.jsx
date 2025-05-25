import { Link } from "react-router";

const Menu = () =>{
    return(
    <nav className='menu'>
        <Link to='/'>Principal </Link>
        <Link to='/Lista-Alumnos'>Alumnos </Link>
        <Link to='/Agregar-Alumno'>Agregar Alumno </Link>
        <Link to='/error'>Error404</Link>
        <Link to='/Nosotros'>Nosotros</Link>

    </nav>
    )
}

export default Menu
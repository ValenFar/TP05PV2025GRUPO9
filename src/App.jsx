import './css/App.css'
import Menu from './components/nav.jsx'
import AppRouter from './router/AppRouter.jsx'


function App() {

  return (
    <div>
      <div className='contenedor1'>
        <Menu/>
        <h1>Administración de Alumnos</h1>
      <AppRouter/>
        
      </div>
    </div>
  )
}

export default App

import { Link } from 'react-router-dom';
import errorImage from '../assets/images/ERROR404.png';

const Error = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-3 fw-bold mb-3">ERROR 404.</h1>
      <h2 className="mb-4">Ingrese una url válida de nuestros dominios...</h2>

      <div className="w-100 d-flex justify-content-center mb-3">
        <img
          src={errorImage}
          alt="Error 404"
          className="img-fluid w-50 w-md-25 animate__animated animate__pulse animate__infinite"
        />
      </div>

      <p className="mb-4 px-3">
        <strong>
          Este error suele ocurrir cuando no se ingresa correctamente una URL válida de nuestros dominios.
          Por favor, ingrese una URL distinta o vuelva a la página principal.
        </strong>
      </p>

      <Link to="/" className="btn btn-outline-primary d-flex align-items-center gap-2">
        <i className="bi bi-arrow-left-circle-fill"></i>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default Error;
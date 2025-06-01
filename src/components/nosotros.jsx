const Nosotros = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-decoration-underline">
        Sobre nosotros
      </h1>
      <h2 className="text-center fs-1">Somos el GRUPO 9</h2>

      <div className="text-center my-3">
        <img
          src="/iconG9.png"
          alt="Logo Grupo 9"
          className="img-fluid shadow-lg animate__animated animate__pulse animate__slower"
          style={{ maxHeight: "200px" }}
        />
      </div>

      <p className="text-center mx-auto" style={{ maxWidth: "700px" }}>
        Somos un equipo de estudiantes comprometidos con el desarrollo web y el aprendizaje colaborativo.
        Este proyecto fue desarrollado en el marco de la materia <strong>Programación Visual</strong>, donde
        aplicamos nuestras habilidades en diseño, lógica y código.
      </p>

      <p className="text-center mb-5 fw-bold fs-1">
        Nuestro grupo de desarrolladores:
      </p>

      <img
        src="https://pngimg.com/uploads/madagascar_penguins/madagascar_penguins_PNG56.png"
        className="img-fluid"
        alt="Pingüinos de Madagascar, GRUPO9"
      />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

        <div className="col">
          <div className="card h-100 text-center shadow-sm border-0 transition-hover">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Valentín Farfán</h5>
                <p className="card-text">Desarrollador</p>
              </div>
              <a
                href="mailto:maxy.far@gmail.com"
                className="btn btn-outline-primary mt-3"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center shadow-sm border-0 transition-hover">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Jorge Marino</h5>
                <p className="card-text">Desarrollador</p>
              </div>
              <a
                href="mailto:mjorgeluis785@gmail.com"
                className="btn btn-outline-primary mt-3"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center shadow-sm border-0 transition-hover">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Elías Tolaba</h5>
                <p className="card-text">Desarrollador</p>
              </div>
              <a
                href="mailto:eliastoladm@gmail.com"
                className="btn btn-outline-primary mt-3"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center shadow-sm border-0 transition-hover">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Lucas Zerpa</h5>
                <p className="card-text">Desarrollador</p>
              </div>
              <a
                href="mailto:lenkagamine268@gmail.com"
                className="btn btn-outline-primary mt-3"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center mt-5 text-muted">
        © {new Date().getFullYear()} Grupo 9 - Todos los derechos reservados.
      </footer>

      <style>
        {`
          .transition-hover {
            transition: transform 0.7s ease, box-shadow 0.7s ease;
            overflow: visible !important;
          }
          .transition-hover:hover {
            transform: scale(1.10);
            box-shadow: 0 0.8rem 1rem rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default Nosotros;

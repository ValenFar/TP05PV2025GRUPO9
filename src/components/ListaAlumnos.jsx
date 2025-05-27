const ListaAlumnos = ({ alumnos }) => {
  console.log(alumnos)
  console.log("llegaron los datos")
  return(
    <div>
    <h2>Lista de Alumnos</h2>
    {alumnos.length === 0 && <p>No hay alumnos cargados.</p>}
    {alumnos.map((alumno, index) => (
      <div key={index}>
        <p><strong>LU:</strong> {alumno.lu}</p>
        <p><strong>Nombre:</strong> {alumno.nombre}</p>
        <p><strong>Apellido:</strong> {alumno.apellido}</p>
        <p><strong>Curso:</strong> {alumno.curso}</p>
        <p><strong>Teléfono:</strong> {alumno.telefono}</p>
        <p><strong>Mail:</strong> {alumno.mail}</p>
        <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
        <hr />
      </div>
    ))}
  </div>
  )
}

export default ListaAlumnos;
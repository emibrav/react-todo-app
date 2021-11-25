const Todo = ({todo, eliminarTodo, editarTodo}) => {

  const { id, nombre, descripcion, estado, prioridad } = todo

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{nombre} ({estado ? "Completada" : "Pendiente"})</div>
          {descripcion}
        </div>
        <span className="badge bg-primary rounded-pill me-2">{prioridad ? "Prioritario" : ""}</span>
        <div>
          <button className="btn btn-danger me-2" onClick={() => eliminarTodo(id)}>🧺</button>
          <button className="btn btn-warning" onClick={() => editarTodo(id)}>✅</button>
          <button className="btn btn-primary ms-2">🖊</button>
        </div>
      </li>
    </>
  )
}

export default Todo

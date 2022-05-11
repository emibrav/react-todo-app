import Swal from 'sweetalert2'
import { useFormulario } from "../hooks/useFormulario";

const Form = ({agregarTodo, cleanTodos}) => {

  const initialState = {
    nombre: '',
    descripcion: '',
    estado: 'pendiente',
    prioridad: false
  }

  const [inputs, handleChange, reset] = useFormulario(initialState)

  const { nombre, descripcion, estado, prioridad } = inputs

  const handleSubmit = e => {
    e.preventDefault();
    if(!nombre.trim()) {
      e.target[0].focus()
      Swal.fire({
        title: 'Ponele nombre a la tarea!',
        text: 'La tarea debe tener un nombre',
        icon: 'error',
        confirmButtonText: 'Bueno culiau'
      });
      return
    }
    if(!descripcion.trim()) {
      e.target[1].focus()
      Swal.fire({
        title: 'Error!',
        text: 'La descripcion no puede estar vacía!',
        icon: 'error',
        confirmButtonText: 'Bueno culiau'
      })
      return
    }
    
    agregarTodo({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad: prioridad,
      id: Date.now()
    })

    reset(initialState);
    e.target[0].focus()
  }

  // cleanTodos(
  //   reset(initialState)
  // )

  // const handleChange = e => {
  //   const {name, value, checked, type} = e.target
    
  //   setTodo((old) => ({
  //     ...old,
  //     [name]: type === "checkbox" ? checked : value
  //   }))
  // }

  return (
    <>
      <h3>Agregar tarea</h3>
      <form onSubmit={handleSubmit}>
        <input 
          name="nombre"
          className="form-control mb-2"
          placeholder="Ingrese tarea..."
          type="text"
          value={nombre}
          onChange={handleChange}
        />
        <textarea 
          name="descripcion"
          className="form-control mb-2"
          placeholder="Descripción..."
          value={descripcion}
          onChange={handleChange}

        />
        <select 
          name="estado"
          className="form-control mb-2" 
          value={estado}
          onChange={handleChange}

        >
          <option value="pendiente">pendiente</option>
          <option value="completado">completado</option>
        </select>
        <div className="form-check mb-2">
          <input
            className="form-check-input" 
            type="checkbox"
            name="prioridad"
            checked={prioridad} 
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
      <div>
        <button className="btn btn-danger mt-2" onClick={cleanTodos}>Eliminar todo</button>
      </div>
    </>
  )
}

export default Form

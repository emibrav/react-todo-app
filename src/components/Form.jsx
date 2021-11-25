import Swal from 'sweetalert2'
import { useFormulario } from "../hooks/useFormulario";

const Form = ({agregarTodo}) => {

  const initialState = {
    nombre: 'holanda',
    descripcion: 'asdasd',
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
        title: 'Error!',
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

  // const handleChange = e => {
  //   const {name, value, checked, type} = e.target
    
  //   setTodo((old) => ({
  //     ...old,
  //     [name]: type === "checkbox" ? checked : value
  //   }))
  // }

  return (
    <>
      <h3>Agregar to-do</h3>
      <form onSubmit={handleSubmit}>
        <input 
          name="nombre"
          className="form-control mb-2"
          placeholder="ingrese tarea..."
          type="text"
          value={nombre}
          onChange={handleChange}
        />
        <textarea 
          name="descripcion"
          className="form-control mb-2" 
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
        <button type="subtmi" className="btn btn-primary">Agregar</button>
      </form>
    </>
  )
}

export default Form

import { useEffect, useState } from "react/cjs/react.development"
import Form from "./Form"
import Todo from "./Todo"

const TodoList = () => {

  let [todos, setTodos] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    const pendingTodos = todos.filter(item =>  !item.estado)
    const priorityTodos = todos.filter(item => item.prioridad)
    if (pendingTodos.length === 0) {
      document.title = "App de tareas"
    } else {
      document.title = `${pendingTodos.length} tareas pendientes | ${priorityTodos.length} prioritarios`
    }
  })

  const agregarTodo = (todo) => {
    setTodos((previousState) => [...previousState, todo])
  }

  const eliminarTodo = (id) => {
    setTodos((old) => old.filter(item => item.id !== id))
  }

  const editarTodo = (id) => {
    const filtrarTodos = todos.map(item => (
      item.id === id ? {...item, estado: !item.estado} : item
    ))
    setTodos(filtrarTodos)
  }

  const cleanTodos = () => {
    setTodos(todos = [])
  }

  return (
    <div className="container mb-2 p-2">
      <div className="d-flex flex-column">
        <Form agregarTodo={agregarTodo} cleanTodos={cleanTodos}/>
        <ul className="list-group list-group-numbered mt-3">
          {
            todos.map((item) => (
             <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default TodoList

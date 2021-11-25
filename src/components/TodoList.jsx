import { useEffect, useState } from "react/cjs/react.development"
import Form from "./Form"
import Todo from "./Todo"

const TodoList = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    if(localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const agregarTodo = (todo) => {
    // console.log(todo)
    setTodos((old) => [...old, todo])
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

  return (
    <div className="container mb-2 p-2">
      <div className="d-flex flex-column">
        <Form agregarTodo={agregarTodo} />
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

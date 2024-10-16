import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n) {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const value = setInterval(()=>{

      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      },n*1000)

      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      },)

      return ()=>{
        clearInterval(value);
      }


  }, [n])

    })

  return todos;
}

function App() {
  const todos = useTodos(5);

  return (
    <>
    <p>Todos</p>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
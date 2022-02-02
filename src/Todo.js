import {useEffect, useState} from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(!todo) return;
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  }
  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your todo..."
          value={todo}
          onChange={onChange}
        />
        <button>Add Todo</button>
      </form>
      <hr/>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import FormComp from "./components/form";

export default function App() {
  const [input, setInput] = React.useState({ desc: "", date: "" });
  const [todos, setTodos] = React.useState([]);

  const deleteTodo = event => {
    console.log(`Olen eventin nimi HÖHÖÖ: ${event.target.name}`);
    setTodos(todos.filter((_, i) => i !== Number(event.target.name)));
    console.log(todos);
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, input]);
  };

  const inputChanged = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <header className="App-header">TodoList</header>
      <FormComp inputChanged={inputChanged} input={input} addTodo={addTodo} />
      <Todolist todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

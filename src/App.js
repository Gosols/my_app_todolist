import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [input, setInput] = React.useState({});

  const formCallback = inputData => {
    setInput(inputData);
  };

  return (
    <div className="App">
      <header className="App-header">TodoList</header>
      <TodoForm appCallback={formCallback} />
      <Todolist />
    </div>
  );
}

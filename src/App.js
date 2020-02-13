import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [input, setInput] = React.useState({});
  const [list, setList] = React.useState([]);

  const formCallback = inputData => {
    setInput(inputData);
  };

  const listCallback = listData => {

    setList(...listData, input);
  };

  return (
    <div className="App">
      <header className="App-header">TodoList</header>
      <TodoForm callback={formCallback} />
      <Todolist callback={listCallback} list={list}  />
    </div>
  );
}

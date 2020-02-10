import React from "react";

function Todolist() {
  const [input, setInput] = React.useState({ desc: "", date: "" });
  const [todos, setTodos] = React.useState([]);

  const addTodo = event => {
    event.preventDefault();
    setTodos([ ...todos, input]);
    setInput({ ...input, desc: "" });
    setInput({ ...input, date: "" });
  };

  const inputChanged = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="inputfield">
        <label>Description: </label>
        <input
          name="desc"
          type="text"
          value={input.desc}
          onChange={inputChanged}
        />
        <label> Date: </label>
        <input
          name="date"
          type="date"
          placeholder="DD.MM.YYYY"
          value={input.date}
          onChange={inputChanged}
        ></input>
        <label> </label>
        <button onClick={addTodo}>Add</button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;

import React from "react";

export default function TodoForm(props) {
  const [input, setInput] = React.useState({ desc: "", date: "" });
  
  const addTodo = (event) => {
    event.preventDefault();

    setInput({ desc: "", date: "" });
    props.callback(input);
    
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
          placeholder="Enter text"
          value={input.desc}
          onChange={inputChanged}
        />

        <label> Date: </label>
        <input
          name="date"
          type="date"
          value={input.date}
          onChange={inputChanged}
        ></input>
        <label> </label>
  <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

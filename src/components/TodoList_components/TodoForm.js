import React from "react";

export default function TodoForm(props) {
  const [input, setInput] = React.useState({ desc: "", date: "" });

  const addTodo = () => {
    setInput({ desc: "", date: "" });

    //kutsutaan App.js:n, eli parent komponentin metodia, johon laitetaan parametriksi
    //se, mitä halutaan ylöspäin, eli parentille lähettää
    
    //tässä tapauksessa haluamme inputin, jotta saamme sen lähetettyä App.js:n kautta
    //Todolist.js:lle
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

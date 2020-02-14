import React from "react";
import "../App.css";
import TodoTable from "./TodoList_components/TodoTable";
import TodoForm from "./TodoList_components/TodoForm";

export default function TodoList() {
  //Tähän tallennetaan TodoForm.js:n lähettämä data
  //Tämä lähetetään propsina Todolist.js:lle jotta sinne saadaan kuljetettua
  //data TodoFormista
  const [input, setInput] = React.useState({ desc: "", date: "" });

  //käytetään, jotta Todolist.js:n useEffect ei käynnisty ensimmäisellä renderöinnillä
  //koska muuten se tallentaisi tyhjän olion listaan aina sivun päivittäessä
  const [firstRender, setFR] = React.useState(true);

  // tämän callback-funktion ansiosta saamme nostettua dataa TodoForm.js:stä
  //ja tallennettua se App.js:n input stateen
  //se onnistuu antamalla tämä funktio propsina ( alhaalla <TodoForm callback={formCallback} /> )

  //Kun tätä funktiota kutsutaan TodoForm.js:ssä, laitetaan "inputData":n tilalle se data
  //mikä halutaan lähettää App.Js:lle
  const formCallback = inputData => {
    setInput(inputData);
    if (firstRender) {
      setFR(false);
    }
  };
  return (
    <div className="App">
      <header className="App-header">TodoList</header>
      <TodoForm callback={formCallback} />
      <TodoTable input={input} render={firstRender} />
    </div>
  );
}

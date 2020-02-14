import React from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

export default function TodoTable(props) {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => { //käytetään listan päivittämiseen aina Add-nappia painaessa
    if (props.render) {
      console.log(props.input)
    } else {
      setTodos([...todos, props.input]);
      console.log("nih")
      console.log(props.input)
    }
  }, [props.input]);

  const deleteTodo = event => {
    setTodos(todos.filter((_, i) => i !== Number(event.target.id)));
  };

  const columns = [
    {
      Header: "Description",
      accessor: "desc"
    },
    {
      Header: "Date",
      accessor: "date"
    },
    {
      Cell: ({ index }) => (
        <button id={index} onClick={deleteTodo}>
          Delete
        </button>
      ),
      width: 80
    }
  ];

  return <ReactTable data={todos} columns={columns} />;
}

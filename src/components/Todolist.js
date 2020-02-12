import React from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

export default function Todolist(props) {
  const [todos, setTodos] = React.useState([]);

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
      filterable: false,
      sortable: false,
      width: 80
    }
  ];

  return <ReactTable data={todos} columns={columns} filterable="true" />;
}

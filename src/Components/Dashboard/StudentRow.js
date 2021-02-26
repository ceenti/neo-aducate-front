import React from "react";

function StudentRow(props) {
  const { name, last_name, birthday, grade } = props.student;
  const { index } = props;

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{last_name}</td>
      <td>{birthday}</td>
      <td>{grade}</td>
      <td></td>
    </tr>    
  )
}

export default StudentRow;

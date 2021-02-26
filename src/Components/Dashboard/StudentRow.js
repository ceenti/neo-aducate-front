import React from "react";

function StudentRow(props) {
  const { last_name, birthday, grade } = props.student;
  const { name } = props.student.user;
  const { index } = props;

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{last_name}</td>
      <td>{new Date(birthday).toLocaleDateString()}</td>
      <td>{grade}</td>
      <td></td>
    </tr>    
  )
}

export default StudentRow;

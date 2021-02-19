import React from "react";
import { Link } from "react-router-dom";

function School(props) {
  const { school: { id, name, address }, pos } = props;

  return (
    <tr>
      <td><Link to={`/dashboard/schools/${id}`}>{pos}</Link></td>
      <td>{name}</td>
      <td>{address}</td>
      <td>
        <Link to={`/dashboard/schools/${id}`} >
          Ver Detalles
        </Link>
      </td>
    </tr>
  )
}

export default School;


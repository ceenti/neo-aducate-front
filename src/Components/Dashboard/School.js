import React from "react";
import { Link } from "react-router-dom";

function School() {
  return (
    <tr>
      <td><Link to="/dashboard/schools/1">1</Link></td>
      <td>Nombre</td>
      <td>Description</td>
      <td>Deshabilitar/Habilitar</td>
      <td>Info</td>
      <td>Mas</td>
    </tr>
  )
}

export default School;


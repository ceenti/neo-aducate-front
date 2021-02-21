import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ViewIcon } from "../../icons/view.svg";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { ReactComponent as PencilIcon } from "../../icons/pencil.svg";

function School(props) {
  const { school: { id, name, address }, pos } = props;

  return (
    <tr>
      <td><Link to={`/dashboard/schools/${id}`}>{pos}</Link></td>
      <td>{name}</td>
      <td>{address}</td>
      <td>
        <Link to={`/dashboard/schools/${id}`} >
          <ViewIcon />
        </Link>
        <Link to={`/dashboard/schools/edit/${id}`} >
          <PencilIcon />
        </Link>
        <Link>
          <DeleteIcon />
        </Link>
      </td>
    </tr>
  )
}

export default School;


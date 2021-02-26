import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ViewIcon } from "../../icons/view.svg";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { ReactComponent as PencilIcon } from "../../icons/pencil.svg";

function School(props) {
  const { _id, school_name, address } = props.school;
  const { pos } = props

  return (
    <tr>
      <td><Link to={`/dashboard/schools/${_id}`}>{pos}</Link></td>
      <td>{school_name}</td>
      <td>{address}</td>
      <td>
        <Link to={`/dashboard/schools/${_id}`} >
          <ViewIcon />
        </Link>
        <Link to={`/dashboard/schools/edit/${_id}`} >
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


import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ViewIcon } from "../../icons/view.svg";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { ReactComponent as PencilIcon } from "../../icons/pencil.svg";

function Membership(props) {
  const { membership: { id, name, cost, amount, duration }, pos } = props;

  return (
    <tr>
      <td><Link to={`/dashboard/memberships/${id}`}>{pos}</Link></td>
      <td>{name}</td>
      <td>{cost}</td>
      <td>{amount}</td>
      <td>{duration}</td>
      <td>
        <Link to={`/dashboard/memberships/${id}`} >
          <ViewIcon />
        </Link>
        <Link to={`/dashboard/memberships/edit/${id}`} >
          <PencilIcon />
        </Link>
        <Link>
          <DeleteIcon />
        </Link>
      </td>
    </tr>
  )
}

export default Membership;

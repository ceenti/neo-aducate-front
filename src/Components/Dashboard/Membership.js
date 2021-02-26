import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ViewIcon } from "../../icons/view.svg";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { ReactComponent as PencilIcon } from "../../icons/pencil.svg";

function Membership(props) {
  const {_id, duration, max_amount, min_amount, price, title_tier} = props.membership;
  const {position} = props.position

  return (
    <tr>
      <td><Link to={`/dashboard/memberships/${_id}`}>{position}</Link></td>
      <td><strong>{title_tier}</strong></td>
      <td>$ {price}</td>
      <td className="text-center">{min_amount}</td>
      <td className="text-center">{max_amount}</td>
      <td>{duration} meses</td>
      <td>
        <Link to={`/dashboard/memberships/${_id}`} >
          <ViewIcon />
        </Link>
        <Link to={`/dashboard/memberships/edit/${_id}`} >
          <PencilIcon />
        </Link>
        {/* <Link>
          <DeleteIcon />
        </Link> */}
      </td>
    </tr>
  )
}

export default Membership;

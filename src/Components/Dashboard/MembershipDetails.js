import React, {useEffect, useState} from "react";
import {getMembershipById} from './../../lib/api';

function MembershipDetails(props) {
  const [membership, setMembership] = useState({});

  useEffect(() => {
    getMembershipById(props.id,setMembership)
    console.log(props)
  }, []);
 

  const { _id, max_amount, min_amount, price, duration, title_tier} = membership;  

  return (
    <div className="school-details">
      <div>
        <label for="name">Nombre:</label>
        <p className="col-6">{title_tier}</p>
      </div>

      <div>
        <label for="address">Costo por alumno:</label>
        <p className="col-6">${price}</p>
      </div>

      <div>
        <label for="phone">Número de alumnos:</label>
        <p className="col-6"><strong>{min_amount}</strong> - <strong>{max_amount}</strong></p>
      </div>

      <div>
        <label for="membership">Periodicidad:</label>
        <p className="col-6">{duration} meses</p>
      </div>
    </div>
  )
}


export default MembershipDetails;

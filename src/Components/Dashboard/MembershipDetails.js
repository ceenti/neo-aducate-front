import React, {useEffect, useState} from "react";
import {getTierById} from './../../lib/api';

function MembershipDetails(props) {
  const [memberTier, setmember] = useState({});
  useEffect(() => {

    let tier = getTierById(props.tierId)
    setmember(tier)
  }, []);

  //const { membership: { name, cost, amount, duration }} = props;
  const {max_amount, min_amount, price, duration, title_tier} = memberTier

  return (
    <div className="school-details">
      <div>{props.tierId}</div>
      <div>
        <label for="name">Nombre:</label>
        <p className="col-6">{title_tier}</p>
      </div>

      <div>
        <label for="address">Costo por alumno:</label>
        <p className="col-6">{price}</p>
      </div>

      <div>
        <label for="phone">Número de alumnos:</label>
        <p className="col-6"><strong>{max_amount}</strong><strong>-{min_amount}</strong></p>
      </div>

      <div>
        <label for="membership">Periodicidad:</label>
        <p className="col-6">{duration}</p>
      </div>
    </div>
  )
}


export default MembershipDetails;

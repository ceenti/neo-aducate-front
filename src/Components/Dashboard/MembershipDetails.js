import React from "react";

function MembershipDetails(props) {
  const { membership: { name, cost, amount, duration }} = props;

  return (
    <div className="school-details">
      <div>
        <label for="name">Nombre:</label>
        <p className="col-6">{name}</p>
      </div>

      <div>
        <label for="address">Costo por alumno:</label>
        <p className="col-6">{cost}</p>
      </div>

      <div>
        <label for="phone">Número de alumnos:</label>
        <p className="col-6">{amount}</p>
      </div>

      <div>
        <label for="membership">Periodicidad:</label>
        <p className="col-6">{duration}</p>
      </div>
    </div>
  )
}


export default MembershipDetails;

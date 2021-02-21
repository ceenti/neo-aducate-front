import React from "react";

function SchoolDetails(props) {
  const { school: { name, address, phone, tier }} = props;

  return (
    <div className="school-details">
      <div>
        <label for="name">Nombre:</label>
        <p className="col-6">{name}</p>
      </div>

      <div>
        <label for="address">Dirección:</label>
        <p className="col-6">{address}</p>
      </div>

      <div>
        <label for="phone">Teléfono:</label>
        <p className="col-6">{phone}</p>
      </div>

      <div>
        <label for="membership">Membresia:</label>
        <p className="col-6">{tier}</p>
      </div>
    </div>
  )
}


export default SchoolDetails;

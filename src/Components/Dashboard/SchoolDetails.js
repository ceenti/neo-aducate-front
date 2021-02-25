import React, { useState, useEffect } from "react";
import { getSchoolById } from './../../lib/api';
import MembershipDetails from './MembershipDetails';
import { Button } from 'reactstrap';

function SchoolDetails(props) {
  const [school, setschool] = useState({});
  const [memDetail, setMemDetail] = useState(false);
  useEffect(() => {
    getSchoolById(props.id, setschool)
  }, []);

  const { _id, school_name, address, phone, tier } = school;

  function displayMembership(){
    setMemDetail(!memDetail)
  }

  return (
    <div className="school-details" data-id={_id} >
      <div>
        <label for="name">Nombre:</label>
        <p className="col-6">{school_name}</p>
      </div>

      <div>
        <label for="address">Dirección:</label>
        <p className="col-6">{address}</p>
      </div>

      <div>
        <label for="phone">Teléfono:</label>
        <p className="col-6">{phone}</p>
      </div>
      <Button className="btn btn-pink" onClick={displayMembership}>Detalle membresía</Button>
      {memDetail ? <div className=""><MembershipDetails tier={tier}/></div> : null}
    </div>

  )
}


export default SchoolDetails;

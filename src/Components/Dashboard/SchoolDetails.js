import React, {useState, useEffect} from "react";
import {getSchoolById} from './../../lib/api';
import MembershipDetails from './MembershipDetails';



function SchoolDetails(props) {
  const [school, setschool] = useState({});
  useEffect(() => {
    getSchoolById(props.id, setschool)
  }, []);

  const { _id, school_name, address, phone, user } = school;

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

      <div>
        <label for="membership">Membresia:</label>
        <p className="col-6">{user}</p>
      </div>
      <MembershipDetails tierId = {user}/>
    </div>

  )
}


export default SchoolDetails;

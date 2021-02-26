import React, { useState, useEffect } from "react";
import { getSchoolById } from './../../lib/api';
import MembershipDetails from './MembershipDetails';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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

    <div className=" member-detail row">
      <div className="">
          <div class="card-deck">
            <div class="card">
              <div class="card-body" data-id={_id}>
                <h5 class="card-title">{school_name}</h5>
                <label>Dirección: </label>
                <p class="card-text">{address}</p>
                <label>Teléfonos: </label>
                <p class="card-text"><strong class="text-muted">{phone}</strong></p>
              </div>
              <div className="d-flex justify-content-start m-1">
                <Button className="btn btn-pink btn-sm" onClick={displayMembership}>Desplegar Membresía</Button>
              </div>
            </div>
            <div className="detailedMembership">
              {memDetail ? <div className=""><MembershipDetails id={tier._id}/></div> : null}
          </div>
          </div>

      </div>    

    </div>

  )
}


export default SchoolDetails;

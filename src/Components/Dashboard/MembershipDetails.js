import React, {useEffect, useState} from "react";
import {getMembershipById} from './../../lib/api';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function MembershipDetails(props) {
  const [membership, setMembership] = useState({});

  useEffect(() => {
    getMembershipById(props.id,setMembership)
    console.log(props)
  }, []);
 

  const { _id, max_amount, min_amount, price, duration, title_tier} = membership;  

  return (
  
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title_tier}</h5>
          <Label for="price">Precio:</Label>
          <p class="card-text">${price}</p>
          <Label for="price">Rango de alumnos:</Label>
          <p class="card-text">{`${min_amount} - ${max_amount}`}</p>
          <Label for="membership">Duración: </Label>
          <p class="card-text">{duration} meses</p>
        </div>
      </div>

  )
}


export default MembershipDetails;

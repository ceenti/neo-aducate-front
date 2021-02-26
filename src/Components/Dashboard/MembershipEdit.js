import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { useState, useEffect } from "react";
import { getMembershipById } from './../../lib/api';
import { updateMembership } from './../../lib/api';


function MembershipEdit(props) {
  const [membership, setMembership] = useState({});

  const changeHandler = event => {
    let name = event.target.name
    let value = event.target.value
    setMembership({...membership, [name]: value})
  }
  function EditMembershipButton(){
    updateMembership(membership)
    console.log(membership)
  }

  useEffect(() => {
    getMembershipById(props.id, setMembership)
  }, []);
  
  console.log(membership)
  return (
    <div className="school-form col-12">
      <h2 className="">Edit Membership</h2>
      <Form data-memberid = {membership['id']} >
        <FormGroup>
          <Label for="name">Tipo de membresía: </Label>
          <Input type="text" name="title_tier" placeholder="School Name" value={membership['title_tier']} onChange={changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="price">Precio:</Label>
          <Input type="number" name="price" placeholder="$30" value={membership['price']} onChange={changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Número alumnos (mínimo): </Label>
          <Input type="number" name="min_amount" placeholder="250" value={membership['min_amount']} onChange={changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Número alumnos (máximo): </Label>
          <Input type="number" name="max_amount" placeholder="250" value={membership['max_amount']} onChange={changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="duration">Duración en meses: </Label>
          <Input type="number" name="duration" placeholder="3 meses" value={membership['duration']} onChange={changeHandler}  />
        </FormGroup>
        <div className="d-flex justify-content-end">
        <Button className="btn btn-aqua" type="button" onClick = {EditMembershipButton}>Cancelar</Button>
        <Button className="btn btn-pink" type="button" onClick = {EditMembershipButton}>Editar</Button>
        </div>
      </Form>
    </div>
  )
}

export default MembershipEdit;

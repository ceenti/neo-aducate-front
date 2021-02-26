import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";
import {updateSchool} from './../../lib/api';
import {getSchoolById} from './../../lib/api';

function SchoolEdit(props) {
  const [schoolDetails, setSchoolDetails] = useState({});

  const changeHandler = event => {
    setSchoolDetails({...schoolDetails, [event.target.name]: event.target.value})
  }

  function onClickHandler(){
    updateSchool(schoolDetails)
  }

  useEffect(() => {
    getSchoolById(props.id, setSchoolDetails)
  }, []);

  return (
    <div className="school-form">
      <h2>Editar Escuela</h2>
      <Form>
        <FormGroup>
          <Label for="name">Nombre:</Label>
          <Input type="text" name="school_name" placeholder="School Name" value={schoolDetails['school_name']} onChange={changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="address">Dirección:</Label>
          <Input type="text" name="address" placeholder="Fake St 123" value={schoolDetails['address']} onChange={changeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Teléfono:</Label>
          <Input type="text" name="phone" placeholder="55-5555-5555" value={schoolDetails['phone']} onChange={changeHandler}/>
        </FormGroup>
        <div className="d-flex justify-content-end">
        <Link className="btn btn-aqua" to="/dashboard/schools">Cancelar </Link>
        <Button className="btn btn-pink" type="button"  name="submit" value="Edit School" onClick={onClickHandler}> Guardar </Button>
        </div>
      </Form>
    </div>
  )
}

export default SchoolEdit;

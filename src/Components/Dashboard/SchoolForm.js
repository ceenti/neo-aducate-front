import React, {useState, useEffect} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function SchoolForm() {
  return (
    <div className="school-form">
      <h2>Nueva Escuela</h2>
      <Form className="school-form">
      <FormGroup>
        <Label for="school_name">Nombre de la escuela:</Label>
        <Input type="text" name="school_name" id="school_name" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="address">Ubicación</Label>
        <Input type="text" name="address" id="address" placeholder="123 Fake Street st" />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Teléfono</Label>
        <Input type="text" name="phone" id="phone" placeholder="55-5555-5555" />
      </FormGroup>
      <FormGroup>
        <Label for="name">Nombre de profesor</Label>
        <Input type="text" name="name" id="name" placeholder="John Doe" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email@domain.com" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Role</Label>
        <Input type="select" name="role" id="exampleSelect">
          <option>School</option>
          <option>Student</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Tier</Label>
        <Input type="select" name="tier" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Input>
      </FormGroup>
     
      <Button className="btn-pink">Submit</Button>
    </Form>  
    </div>
  )
}

export default SchoolForm;

import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NewButton from './../NewButton/index';
//import React, {useState} from 'react';

export default function Login(){

  return (
    <div className="Login">
      <div className="my-2" style={{ width: '80px' }}><img src="./assets/images/logo-neo.svg"/></div>
      <div className="row align-items-center">
        <div className="right-aside col-12 col-sm-6">
          <img src="./assets/images/Data_points-cuate.png" />
        </div>

        <Form className="login-form col-12 col-sm-6 p-2">
          <h1>Enroll. Empower. Educate.</h1>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="john@neoeducate.com" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="any password" />
          </FormGroup>
          <NewButton />
        </Form>
      </div>

      </div>
      
  )
}

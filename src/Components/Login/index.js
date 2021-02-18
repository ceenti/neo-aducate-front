import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NewButton from './../NewButton/index'
import './style.css'

export default function Login(){
  return (
    <div className="Login d-flex flex-row justify-content-between align-items-center">
      <div className="right-aside col-6">
        <img src="./../images/Data_points-cuate.png" />
      </div>
      <Form className="login-form col-6 border bordered p-4">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <NewButton/>
      </Form>
    </div>

  )
}

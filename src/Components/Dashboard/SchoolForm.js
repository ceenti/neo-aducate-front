import React, {useState, useEffect} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getAllMemberships } from './../../lib/api';
import { createSchool } from "./../../lib/api";

function SchoolForm() {
  const [allMemberships, setAllMemberships] = useState([]);
  const [school, setSchool] = useState({});

  function changeHandler(event){
    let value = event.target.value
    let name = event.target.name
    setSchool({...school, [name] : value })
  }

  function addSchool(){
    createSchool(school, setSchool)
    console.log(school)
  }

  useEffect(() => {
    getAllMemberships(setAllMemberships);
    console.log(allMemberships)
  }, []);

  return (
    <div className="school-form">
      <h3 className="title-section">Nueva Escuela</h3>
      <Form className="school-form">
        <div className="row">
          <div className="col-5">
            <FormGroup>
              <Label for="school_name">Nombre de la escuela:</Label>
              <Input type="text" name="school_name" id="school_name" placeholder="with a placeholder" onChange={changeHandler} />
            </FormGroup>
            <FormGroup>
              <Label for="address">Ubicación</Label>
              <Input type="text" name="address" id="address" placeholder="123 Fake Street st" onChange={changeHandler} />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Teléfono</Label>
              <Input type="text" name="phone" id="phone" placeholder="55-5555-5555" onChange={changeHandler} />
            </FormGroup>
            <FormGroup>
              <Label for="name">Nombre de profesor</Label>
              <Input type="text" name="name" id="name" placeholder="John Doe" onChange={changeHandler} />
            </FormGroup>
          </div>
          <div className="col-5">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email@domain.com" onChange={changeHandler} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password"  onChange={changeHandler}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Role</Label>
              <Input type="select" name="role" id="exampleSelect" onChange={changeHandler}>
                <option value="school">School</option>
                <option value="student" >Student</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Tier</Label>
              <Input type="select" name="tier_id" onChange={changeHandler}>
                { allMemberships.map( membership => <option value={membership._id}>{membership.title_tier}</option> )}
              </Input>
            </FormGroup>
            <div className="d-flex justify-content-end">
              <Button className="btn-pink" onClick={addSchool}>Submit</Button>
            </div>
          </div>
        </div>
      </Form>  
    </div>
  )
}

export default SchoolForm;

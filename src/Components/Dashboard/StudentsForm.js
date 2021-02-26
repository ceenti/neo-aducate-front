import React, {useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";
import { getSchools, createStudent } from './../../lib/api';

function StudentsForm() {
  const [schoolsCollection, setSchoolsCollection] = useState([]);
  const [student, setStudent] = useState({"role": "student"});

  const changeHandler = event => {
    setStudent({...student, [event.target.name]: event.target.value})
  }

  const clickHandler = () => {
    createStudent(student)
  }

  useEffect(() => {
    getSchools(setSchoolsCollection);
  }, []);

  return (
    <div className="school-form">
      <h2>Nuevo Estudiante</h2>
      <Form className="student-form">
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email@domain.com" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="name">Nombre</Label>
        <Input type="text" name="name" id="name" placeholder="Arthur" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="last_name">Apellido</Label>
        <Input type="text" name="last_name" id="last_name" placeholder="Fleck" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="grade">Grado</Label>
        <Input type="text" name="grade" id="grade" placeholder="5" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="birthday">Fecha de Nacimiento</Label>
        <Input type="text" name="birthday" id="birthday" placeholder="01-01-1999" onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="school">Escuela</Label>
        <Input type="select" name="school" onChange={changeHandler}>
          <option value="">Selecciona una escuela</option>
          { schoolsCollection.map( school => <option value={school._id}>{school.school_name}</option> )}
        </Input>
      </FormGroup>
      <div className="text-right">
        <Link className="btn btn-aqua" to="/dashboard/students">Cancelar </Link>
        <Button className="btn-pink" onClick={clickHandler}>Guardar</Button>
      </div>
      </Form>  
    </div>
  )
}

export default StudentsForm;

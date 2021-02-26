import React, { useState, useEffect } from "react";
import { Input, Table } from "reactstrap";
import StudentRow from "./StudentRow";  
import { getSchools } from './../../lib/api';
import { getStudentsBySchool } from './../../lib/api';

function StudentsDashboard() {
  const [schoolsCollection, setSchoolsCollection] = useState([]);
  const [studentsCollection, setStudentsCollection] = useState([]);

  useEffect(() => {
    getSchools(setSchoolsCollection)
   },[]);

  const changeHandler = (event) => {
    getStudentsBySchool(event.target.value, setStudentsCollection)
  }

  console.log(!!studentsCollection)

  return (
    <div className="students-dashboard">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="title">Directorio de <strong className="section-name">estudiantes</strong></h3>
      </div>

      <div className="col-6">
        <span>Filtrar por escuela</span>:
        <Input type="select" name="school_filter" onChange={changeHandler}>
          <option value="">Selecciona una escuela</option>
          {schoolsCollection.map(school => {
            return <option value={school._id}>{school.school_name}</option>
          })}
        </Input>
      </div>

      <div className="m-2 p-2" style={{overflowX: "auto"}}>
          <Table hover style={{backgroundColor: "white"}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha de Nac.</th>
                <th>Grado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {!!studentsCollection.length > 0 ? 
                studentsCollection.map((student, index) => {
                  return <StudentRow student={student} index={index+1} key={student._id}/>
                }) : 
                  <tr><td colspan="6" className="text-center">No se encontraron estudiantes</td></tr>
              }
            </tbody>
          </Table>
        </div>
    </div>
  )
}

export default StudentsDashboard;

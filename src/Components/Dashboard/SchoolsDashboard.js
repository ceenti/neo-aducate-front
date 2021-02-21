import React from "react";
import { Table } from 'reactstrap';
import School from './School';
import { Link } from "react-router-dom";

const schools = [
  {
    id: 1,
    name: "CECyT 9",
    address: "Mar Mediterraneo #227"
  },
  {
    id: 2,
    name: "Prepa 6",
    address: "Corina #3"
  },
  {
    id: 3,
    name: "Conalep",
    address: "San Juan del Queue #123"
  }
]

function SchoolsDashboard() {
  return (
    <div className="school-dashboard">
  
      <div className="d-flex justify-content-between mb-3">
        <h3 className="title" >Directorio de <strong className="section-name">Escuelas</strong></h3>
        <Link to="/dashboard/schools/new" className="btn btn-outline-primary btn-sm center">Añadir Escuela</Link>
      </div>

      <div style={{overflowX: "auto"}}>
        <Table hover style={{backgroundColor: "white"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Escuela</th>
              <th>Dirección</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school, index) => {
              return <School school={school} pos={index+1} />
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default SchoolsDashboard;

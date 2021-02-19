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
    name: "Nopalep",
    address: "San Juan del Queue #123"
  }
]

function SchoolsDashboard() {
  return (
    <div className="school-dashboard">
      <h2>Directorio de escuelas</h2>

      <div>
        <Link to="/dashboard/schools/new" className="btn btn-secondary">Añadir Escuela</Link>
      </div>

      <Table striped>
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
  )
}

export default SchoolsDashboard;

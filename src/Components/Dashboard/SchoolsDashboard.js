import React, {useState, useEffect} from "react";
import { Table } from 'reactstrap';
import School from './School';
import { Link } from "react-router-dom";
import PaginationContainer from './Pagination';
import {getSchools} from './../../lib/api';

function SchoolsDashboard() {
  const [schoolsCollection, setschoolsCollection] = useState([]);

  useEffect(() => {
    getSchools(setschoolsCollection)
   },[]);

  return (
      <>
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
              {schoolsCollection.map((school, index) => {
                return <School school={school} pos={index+1} />
              })}
            </tbody>
          </Table>
        </div>
      </div>
      {/* <PaginationContainer/> */}
    </>
  )
}

export default SchoolsDashboard;

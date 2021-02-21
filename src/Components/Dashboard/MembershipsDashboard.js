import React from "react";
import { Table } from "reactstrap";
import Membership from "./Membership";

const memberships = [
  {
    id: 1,
    name: "Tier 1",
    cost: 20,
    amount: 50,
    duration: "6 meses"
  },
  {
    id: 2,
    name: "Tier 2",
    cost: 30,
    amount: 150,
    duration: "6 meses"
  },
  {
    id: 3,
    name: "Tier 3",
    cost: 20,
    amount: 250,
    duration: "6 meses"
  }
]

function MembershipsDashboard() {
  return (
    <div className="school-dashboard">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="title" >Catálogo de <strong className="section-name">Membresías</strong></h3>
      </div>
      
      <div style={{overflowX: "auto"}}>
        <Table hover style={{backgroundColor: "white"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Costo por estudiante</th>
              <th>Número (máximo) de estudiantes</th>
              <th>Periodicidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((membership, index) => {
              return <Membership membership={membership} pos={index+1} />
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default MembershipsDashboard;

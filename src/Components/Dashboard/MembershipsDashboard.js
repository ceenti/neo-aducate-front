import React, {useState, useEffect} from "react";
import { Table } from "reactstrap";
import Membership from "./Membership";
import {getAllMemberships} from './../../lib/api';

function MembershipsDashboard() {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    getAllMemberships(setDetail)
  }, []);

  //const {_id, max_amount, min_amount, price, duration, title_tier} = detail
  console.log(detail)

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
              <th>Membresía</th>
              <th>Precio</th>
              <th>Registros Mínimos</th>
              <th>Registros Máximos</th>
              <th>Periodicidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {detail.map((membership, index) => (
                <Membership 
                membership={membership} 
                position={index+1} 
                />
              )
            )}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default MembershipsDashboard;

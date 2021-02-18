import React from "react";
import { Table } from 'reactstrap';
import School from './School';

function SchoolsDashboard() {
  return (
    <>
      <h2>Directorio de escuelas</h2>

      <Table>
        <tr>
        </tr>
        <tbody>
          <School />
          <School />
          <School />
        </tbody>
      </Table>
    </>
  )
}

export default SchoolsDashboard;

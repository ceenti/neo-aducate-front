import React from "react";
import { ResponsiveContainer, LineChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Line, Legend } from 'recharts';
import { Row, Col } from "reactstrap";

const studentsData = [
  {
    "name": "Enero",
    "Nuevos registros": 120,
    "Registros eliminados": 10
  },
  {
    "name": "Febrero",
    "Nuevos registros": 210,
    "Registros eliminados": 40
  },
  {
    "name": "Marzo",
    "Nuevos registros": 90,
    "Registros eliminados": 0
  },
  {
    "name": "Abril",
    "Nuevos registros": 100,
    "Registros eliminados": 57
  },
  {
    "name": "Mayo",
    "Nuevos registros": 120,
    "Registros eliminados": 10
  }
]

const schoolsData = [
  {
    "name": "Enero",
    "Nuevos registros": 2,
    "Registros eliminados": 0
  },
  {
    "name": "Febrero",
    "Nuevos registros": 0,
    "Registros eliminados": 2
  },
  {
    "name": "Marzo",
    "Nuevos registros": 9,
    "Registros eliminados": 0
  },
  {
    "name": "Abril",
    "Nuevos registros": 5,
    "Registros eliminados": 0
  },
  {
    "name": "Mayo",
    "Nuevos registros": 5,
    "Registros eliminados": 0
  }
]

function Statistics(){
  return (
    <Row>
      <Col xs={12} sm={6}>
        <div className="card rounded m-2 p-2">
          <h3>Registros de nuevos alumnos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={studentsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Nuevos registros" stroke="#012e84" />
              <Line type="monotone" dataKey="Registros eliminados" stroke="#ff9e32" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Col>

      <Col xs={12} sm={6}>
        <div className="card rounded m-2 p-2">
          <h3>Registros de nuevas escuelas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={schoolsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Nuevos registros" stroke="#012e84" />
              <Line type="monotone" dataKey="Registros eliminados" stroke="#ff9e32" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Col>
    </Row>
  )
}

export default Statistics;

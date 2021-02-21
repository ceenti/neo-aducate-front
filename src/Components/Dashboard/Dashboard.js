import React from "react";
import { Container, Row, Col } from "reactstrap";
import DashboardCard from './DashboardCard'

function Dashboard() {
  return (
    <div className="school-dashboard text-center container-fluid">
      <h3 className="title">Bienvenido al <strong className="section-name">Dashboard</strong></h3>
      <DashboardCard/>
    </div>
  );
}

export default Dashboard;

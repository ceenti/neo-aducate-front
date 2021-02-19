import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Header from "./Header";
import SchoolsDashboard from "./SchoolsDashboard";
import SchoolDetails from "./SchoolDetails";
import SchoolForm from "./SchoolForm";

const schools = [
  {
    id: 1,
    name: "CECyT 9",
    address: "Mar Mediterraneo #227",
    phone: "5557655765",
    tier: "Tier 1"
  },
  {
    id: 2,
    name: "Prepa 6",
    address: "Corina #3",
    phone: "5557655765",
    tier: "Tier 2"
  },
  {
    id: 3,
    name: "Nopalep",
    address: "San Juan del Queue #123",
    phone: "5557655765",
    tier: "Tier 3"
  }
]

function SingleSchool() {
  const { id } = useParams();
  const school = schools.find(sch => sch.id == id);

  return <SchoolDetails school={school} />;
}

function DashboardNav() {

  return (
    <Container className="admin-dashboard">
      <Router>
        <Row>
          <Col md={3} className="p-0">
            <Sidebar />
          </Col>

          <Col md={9} className="p-0">
            <Header />
            <Switch>
              <Route
                exact 
                path="/dashboard/schools/new">
                <SchoolForm />
              </Route>
              <Route
                exact 
                path="/dashboard/schools/:id">
                <SingleSchool />
              </Route>

              <Route
                exact
                path="/dashboard/schools"
                component={SchoolsDashboard}
              />

              <Route
                exact
                path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </Container>
  );
}

export default DashboardNav;

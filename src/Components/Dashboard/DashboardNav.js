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
import MembershipsDashboard from "./MembershipsDashboard";
import SchoolDetails from "./SchoolDetails";
import MembershipDetails from "./MembershipDetails";
import SchoolForm from "./SchoolForm";
import SchoolEdit from "./SchoolEdit";
import MembershipEdit from "./MembershipEdit";

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

function getUrl(){
const queryString = window.location.search
console.log(queryString)
}

function SingleSchool() {
  const { id } = useParams();
  const school = schools.find(sch => sch.id == id);

  return <SchoolDetails school={school} />;
}

function EditSchool() {
  const { id } = useParams();
  const school = schools.find(sch => sch.id == id);

  return <SchoolEdit school={school} />;
}

function SingleMembership() {
  const { id } = useParams();
  const membership = memberships.find(memb => memb.id == id);

  return <MembershipDetails membership={membership} />;
}

function EditMembership() {
  const { id } = useParams();
  const membership = memberships.find(memb => memb.id == id);

  return <MembershipEdit membership={membership} />;
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
                path="/dashboard/schools/edit/:id">
                <EditSchool />
              </Route>

              <Route
                exact
                path="/dashboard/schools"
                component={SchoolsDashboard}
              />

              <Route
                exact
                path="/dashboard/memberships/:id">
                <SingleMembership />
              </Route>

              <Route
                exact
                path="/dashboard/memberships/edit/:id">
                <EditMembership />
              </Route>

              <Route
                exact
                path="/dashboard/memberships"
                component={MembershipsDashboard}
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

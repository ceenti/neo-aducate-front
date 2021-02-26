import React, {useState, useEffect} from "react";
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
import MembershipsDashboard from "./MembershipsDashboard";
import SchoolsDashboard from "./SchoolsDashboard";
import StudentsDashboard from "./StudentsDashboard";
import SchoolDetails from "./SchoolDetails";
import MembershipDetails from "./MembershipDetails";
import SchoolForm from "./SchoolForm";
import StudentsForm from "./StudentsForm";
import SchoolEdit from "./SchoolEdit";
import MembershipEdit from "./MembershipEdit";
import Stadistics from './Statistics';

function SingleSchool() {
  const { id } = useParams();
  return <SchoolDetails id = {id} />;
}

function EditSchool() {
  const { id } = useParams();
  return <SchoolEdit id = {id} />;
}

function SingleMembership() {
  const { id } = useParams();

  return <MembershipDetails id={id} />;
}

function EditMembership() {
  const { id } = useParams();

  return <MembershipEdit id={id} />;
}

function DashboardNav() {

  return (
    <Container className="admin-dashboard p-2">
      <Router>
        <Row>
          <Col md={3} >
            <Sidebar className="sidebar-styles" />
          </Col>

          <Col md={9} className="">
            {/* <Header /> */}
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
                path="/dashboard/schools">
                <SchoolsDashboard/>
              </Route>
              <Route
                exact 
                path="/dashboard/statistics">
                  < Stadistics />
              </Route>


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
                path="/dashboard/students">
                <StudentsDashboard/>
              </Route>

              <Route
                exact
                path="/dashboard/students/new">
                <StudentsForm/>
              </Route>


              <Route
                exact
                path="/">
                
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

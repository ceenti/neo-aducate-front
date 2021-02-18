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
import SchoolsDashboard from "./SchoolsDashboard";
import SchoolDetails from "./SchoolDetails";

const routes = [
  {
    path: "/dashboard/schools",
    exact: true,
    sidebar: () => <div>HHHH</div>
  },
  {
    path: "/dashboard/schools/:id",
    sidebar: () => <div>FFFF</div>
  }
];

function SingleSchool() {
  const { id } = useParams();
  return <SchoolDetails id={id} />;
}

function DashboardNav() {

  return (
    <Router>
      <Row>
        <Col md={3}>
          <ul>
            <li>
              <Link to="/dashboard/schools">Escuelas</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </Col>

        <Col md={9}>
          <Switch>
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
          </Switch>
        </Col>
      </Row>
    </Router>
  );
}

export default DashboardNav;
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Login from "./Components/Authentication/Login";
import EmployeeDashboard from "./Components/Dashboard/Employee/EmployeeDashboard";
import ManagerDashboard from "./Components/Dashboard/Manager/ManagerDashboard";
import EmployeeTable from "./Components/Dashboard/Manager/EmployeeTable";
import Tasks from "./Components/Dashboard/Manager/Tasks";
import TaskDetails from "./Components/Dashboard/Manager/TaskDetails";
import EmployeeTasks from "./Components/Dashboard/Employee/EmployeeTasks";
import Profile from "./Components/Dashboard/Employee/Profile";
import Overview from "./Components/Dashboard/Manager/Overview";
import PrivateRoute from "./Components/Authentication/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute
            exact
            path="/managerdashboard"
            component={ManagerDashboard}
          />
          <PrivateRoute
            exact
            path="/employeedashboard"
            component={EmployeeDashboard}
          />
          <PrivateRoute exact path="/employees" component={EmployeeTable} />
          <PrivateRoute exact path="/overview" component={Overview} />
          <PrivateRoute exact path="/tasks" component={Tasks} />
          <PrivateRoute exact path="/taskdetails" component={TaskDetails} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/employeetasks" component={EmployeeTasks} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

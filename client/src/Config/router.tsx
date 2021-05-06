import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Views/Login/Login";
import SignUp from "../Views/SignUp/SignUp";
import Home from "../Views/Home";
import Loading from "../Views/Loading";
import ProtectedRoute from "./ProtectedRoute";

export default function MainRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/loading">
          <Loading />
        </Route>
        <Route exact path="/">
        
          <Login />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/home">
          <ProtectedRoute exact path="/home" component={Home} />
        </Route>
      </Switch>
    </Router>
  );
}

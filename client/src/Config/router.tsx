import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Views/Login/Login";
import SignUp from "../Views/SignUp/SignUp";

export default function MainRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

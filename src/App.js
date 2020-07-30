import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../src/components/LoginForm/LoginForm';
import Logout from '../src/components/LoginForm/Logout';
import Admin from '../src/components/Admin/Dashboard';

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loader" />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

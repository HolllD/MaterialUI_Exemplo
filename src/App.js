// Imports básicos
import React, { Component } from "react";
import './App.css';

// BrowserRouter para redirecionamento
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

// Import das pages
import LoginPage from "./pages/login"
import Dashboard from "./pages/dashboard"

// Loop principal
class App extends Component {
  render() {
    return <Router>
      {/* Redirecionamento dependendo da URL */}
      <Switch>
      <Route exact path="/Login" component={LoginPage}/>
      <Route exact path="/Dashboard" Component={Dashboard}/>
      {/* Caso não ache */}
      <Redirect to={"/Login"} />
      </Switch>
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  }
}

export default App;

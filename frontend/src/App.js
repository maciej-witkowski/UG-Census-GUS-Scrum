import './App.css';
import React, { useState, useEffect} from 'react';
import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom';
import Nav from "./components/Nav"
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RegisterForm from "./components/RegisterForm";
import LogInForm from "./components/LogInForm";
import Info from "./components/Info";
import Stats from "./components/Stats";
import Polls from "./components/Polls";
import Database from "./components/Database";
import AddUserForm from "./components/AddUserForm";
import Profile from "./components/Profile";
import Logout from "./components/Logout";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Nav> </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LogInForm} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/db" component={Database} />
          <Route exact path="/polls" component={Polls} />
          <Route exact path="/add" component={AddUserForm} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/logout" component={Logout} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

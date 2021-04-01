import './App.css';
import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom';
import Nav from "./components/Nav"
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RegisterForm from "./components/RegisterForm";
import LogInForm from "./components/LogInForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav> </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LogInForm} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

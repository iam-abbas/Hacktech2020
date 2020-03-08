import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {AuthProvider} from "./Auth"
import DashboardPage from "./pages/DashboardPage";
import LoginAndRegister from "./pages/LoginAndRegisterPage"
import UserProfilePage from "./pages/UserProfilePage"


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/dashboard" component={DashboardPage}/>
          <Route path="/loginandregister" component={LoginAndRegister}/>
          <Route path="/userprofile" component={UserProfilePage}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}


const HomePage = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>
        Hello teammates
      </p>
      <div>
        <Link to="/register" underline="none">
          <Button variant="contained" color="primary">
            Register
          </Button>
        </Link>

        <Link to="/login" underline="none">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
        <Link to="/loginandregister" underline="none">
          <Button variant="contained" color="primary">
            Both
          </Button>
        </Link>
      </div>
    </header>
  </div>
);


export default App;

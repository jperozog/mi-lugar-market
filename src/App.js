import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard';
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

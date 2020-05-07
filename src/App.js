import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import './assets/css/spinkit.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from "./views/login/Login";
import {Dashboard} from "./views/dashboard/Dashboard";
import {Auth} from "./routers/Auth";
import {ErrorPage} from "./views/error/ErrorPage";

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/error">
            <ErrorPage/>
          </Route>
          <Auth path="/">
            <Dashboard/>
          </Auth>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

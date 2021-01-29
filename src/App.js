import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/dist/css/style.css"
import Login from "./components/Login"
import Register from "./components/Register"
import Loader from "./components/Loader"
import Profile from "./components/Profile"
import PasswordReset from "./components/PasswordReset"

// import {Pie} from "react-chartjs-2"


class App extends Component {
 render(){
  return (
 <BrowserRouter>
 <Route exact path="/" component={Login}>
 {/* <Redirect to="/Home"/> */}
 </Route>
 
 <Switch>
   <Route path={"/Home"} component={Home}/>
   <Route path={"/Dashboard"} component={Dashboard}/>
   <Route path={"/Login"} component={Login}/>
   <Route path={"/Register"} component={Register}/>
   <Route path={"/Profile"} component={Profile}/>
   <Route path={"/PasswordReset"} component={PasswordReset}/>
   <Route path={"/Loader"} component={Loader}/>
 </Switch>
 
 
 </BrowserRouter>
  );
 }
}

export default App;

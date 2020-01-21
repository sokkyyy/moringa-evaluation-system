import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard'
import Item from './components/Dashboard/AdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
      <Route path="/admindashboard" exact component={Item}></Route>
      

    </BrowserRouter>
  );
}

export default App;

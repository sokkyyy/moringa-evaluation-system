

import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home';
import Login from './components/auth/Login';
import React from 'react';
import './App.css';
import MainAssessment from './components/Assessment/MainAssessment'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'


function App() {
  return (

    <BrowserRouter>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/dashboard' exact component={Dashboard}></Route>
      <Route path='/' component={Landing}/>
    </BrowserRouter>
  );
}
export default App;

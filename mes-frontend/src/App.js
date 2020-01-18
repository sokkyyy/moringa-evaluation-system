import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';

import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home';
import Login from './components/auth/Login';
import logo from './logo.svg';


function App() {
  return (
    <BrowserRouter>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/dashboard' exact component={Dashboard}></Route>

    </BrowserRouter>

  );
}

export default App;

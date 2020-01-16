import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/home' exact component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;

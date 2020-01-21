import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home';
import React from 'react';
import './App.css';
import MainAssessment from './components/Assessment/MainAssessment';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import history from './history';

function App() {
  return (

    <BrowserRouter history={history}>
      <Switch>
        <Route path='/dashboard' exact component={Dashboard}></Route>
        <Route path='/' component={Landing} />
      </Switch>

    </BrowserRouter>
  );
}
export default App;

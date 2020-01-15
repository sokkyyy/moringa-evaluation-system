import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/Admin_Dashboard/AdminDashboard';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' component={AdminDashboard}/>
        </Switch>      
      </div>
    </BrowserRouter>
    // <div className="App">
    // rrr
    // </div>
  );
}

export default App;

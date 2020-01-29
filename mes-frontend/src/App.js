
// import Dashboard from './components/Dashboard/Dashboard';
// import Home from './components/Home';
import React from 'react';
import './App.css';
import MainAssessment from './components/Assessment/MainAssessment'; //SELF
// import ManagerAssessment from './components/ManagerAssessment/ManagerAssessment'; //MANAGER


// import AdminDashboard from './components/Dashboard/AdminDashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Landing from './components/Landing/Landing';
// import Footer from './components/Footer/Footer';
import history from './history';
import IndividualReports from './components/Reports/IndividualReports';


function App() {
  return (



    <BrowserRouter history={history}>
      <Switch>
        <Route path='/dashboard' exact component={Dashboard}></Route>
        <Route path='/' exact component={Landing} />
        <Route path='/assessment' exact component={MainAssessment} />
        <Route path='/manager/assessment' exact component={ManagerAssessment} />
        <Route path='/admin/dashboard' exact component={AdminDashboard} />
        <Route path='/reports' exact component={IndividualReports} />
      </Switch>

    </BrowserRouter>
  );
}
export default App;

import React from 'react';
import './App.css';
import MainAssessment from './components/Assessment/MainAssessment'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'

function App() {
  return (


    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route path='/' component={Landing}/> */}
          <Route path='/' component={MainAssessment} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

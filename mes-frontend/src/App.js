import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' component={Landing}/>
        </Switch>      
      </div>
    </BrowserRouter>
  );
}
export default App;

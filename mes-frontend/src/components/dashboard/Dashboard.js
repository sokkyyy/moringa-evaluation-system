import React, { Component } from 'react';
import Navbar from '../dashboard-navbar/Navbar';
import Sidecard from '../Side-card/Sidecard';

class Dashboard extends Component {
  state = {  }
  render() { 
    return ( 
      <body>
        <div>
          <Navbar />
        </div>

        <div className="row container-fluid">
          <div className="col-md-2">
            <h4>Dashboard</h4>
            <hr/>
            <Sidecard />
          </div>
        </div>
       
      </body>
     );
  }
}
 
export default Dashboard;
import React, { Component } from 'react';
import Navbar from '../Dashboard_NavBar/Navbar';
import Sidecard from '../Profile_Card/Sidecard';
import GraphCard from '../Graph_Card/Graphcard';
import NotificationsDiv from '../Notifications_Div/NotificationsDiv';

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
          <div className="col-md-8">
            
            <GraphCard />
          </div>
          <div className="col-md-2 text-center notifications">
            <strong><h6>Notifications  <i class="far fa-bell"></i></h6></strong>
            <hr/>
            <NotificationsDiv />
            <hr/>       
          </div>
        </div>
       
      </body>
     );
  }
}
 
export default Dashboard;
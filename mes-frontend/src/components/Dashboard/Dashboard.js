import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidecard from '../Profile_Card/Sidecard';
import GraphCard from '../Graph_Card/Graphcard';
import NotificationsDiv from '../Notifications_Div/NotificationsDiv';
import CountdownTimer from '../Countdown_Timer/CountdownTimer';
import user from './user.svg'

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
            <hr />
            <div class="card testimonial-card profile">
              <div class="card-up red lighten-1"></div>

              <div class="avatar mx-auto white">
                <img
                  src={user}
                  id="user-dp"
                  alt="user-dp"
                  heigh="80px"
                  width="80px"
                />
              </div>

              <div class="card-body text-center">
                <h4 class="card-title text-center">Anna Doe</h4>
                <hr></hr>

                <p>
                  <i class="far fa-envelope"></i> anna@email.com
                </p>

                <p>
                  <i class="fas fa-user-tag"></i> HR Manager
                </p>

                <p>
                  <i class="fas fa-location-arrow"></i> Nairobi Campus
                </p>

                <p>
                  <i class="fa fa-cog"></i> <a href="">Edit Profile</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <GraphCard />
          </div>
          <div className="col-md-2 text-center notifications">
            <div className="timer">
              <CountdownTimer />
            </div>
            <br />
            <hr />
            <div className="notifications">
              <strong>
                <h6>
                  Notifications <i class="far fa-bell"></i>
                </h6>
              </strong>
              <br />
              <NotificationsDiv />
              <hr />
            </div>
          </div>
        </div>
      </body>
    );
  }
}
 
export default Dashboard;
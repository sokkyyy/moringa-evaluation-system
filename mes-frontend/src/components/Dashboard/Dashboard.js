import React, { Component } from 'react';
import CountdownTimer from '../Countdown_Timer/CountdownTimer';
import GraphCard from '../Graph_Card/Graphcard';
import Navbar from '../Navbar/Navbar';
import NotificationsDiv from '../Notifications_Div/NotificationsDiv';
import user from './user.svg'
import Sidecard from '../Profile_Card/Sidecard';
import UserService from '../../services/UserService';



const userService = new UserService();


class Dashboard extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    userService.getUser()
    .then(response => {
        console.log(response.data);
    })
    .catch(() =>{

        this.props.history.push('/login');
    })
}
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

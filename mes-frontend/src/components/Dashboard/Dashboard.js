import React, { Component } from 'react';

import CountdownTimer from '../Countdown_Timer/CountdownTimer';
import GraphCard from '../Graph_Card/Graphcard';
import Navbar from '../Navbar/Navbar';
import NotificationsDiv from '../Notifications_Div/NotificationsDiv';
import Sidecard from '../Profile_Card/Sidecard';
import UserService from '../../services/UserService';



const userService = new UserService();


class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      staff: {},
      load:true,
    };

  }

  componentDidMount(){
    userService.getUser()
    .then(response => {
        this.setState({staff: response.data});
        this.setState({load:false});
        console.log(this.state);
    })
    .catch(() =>{
        this.props.history.push('/login');
    })
  }
  
  render() {
    return (
      <div>
      {this.state.load ? ' ' : (
      <div>

        <div>
          <Navbar role={this.state.staff.system_role} />
        </div>

        <div className="row container-fluid">
          <div className="col-md-2">
            <h4>Dashboard</h4>
            <hr/>
            <Sidecard staff={this.state.staff} />
          </div>
          <div className="col-md-8">

            <GraphCard />
          </div>
          <div className="col-md-2 text-center notifications">
            <div className="timer">
               <CountdownTimer />
            </div>
            <br/>
            <hr/>
            <div className="notifications">
              <strong><h6>Notifications  <i class="far fa-bell"></i></h6></strong>
              <br/>
              <NotificationsDiv />
              <hr/>
            </div>


          </div>

        </div>
      </div>
      )}
    </div>
     );
  }
}

export default Dashboard;

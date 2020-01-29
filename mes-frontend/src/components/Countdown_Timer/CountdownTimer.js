import React, { Component } from 'react';
import Clock from '../Clock/Clock'
import Notifications from '../../services/Notifications';

const notificationService = new Notifications()

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // deadline: new Date(),
      deadline: '',
      newDeadline: ''
    }
  }
  componentDidMount(){
    this.getAllUserNotifications();
  }

  getAllUserNotifications = () => {
    notificationService.getUserNotifications().then(
      response => {
        this.getLatestDeadline(response.data);
      }
    ).catch(errors => console.log(errors));
  }

  getLatestDeadline = (notifications) => {
    const latest = notifications[0];
    this.setState({deadline: latest.deadline})
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className="timer">
        <div className="timer-title">
          {/* Countdown to {this.state.deadline} */}
          <strong><h6>Evaluation Deadline</h6></strong>
        </div>

        <br />

        <div>
          <Clock deadline={this.state.deadline} />
        </div>
      </div>
    );
  }
}

export default CountdownTimer;

import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'January, 17, 2020'
    }
  }

  changeDeadline() {
    this.setState({deadline: newDeadline})
  }
  
  render() { 
    return ( 
      <div className="timer">
        <div className="timer-title">
          Countdown to {this.state.deadline}
        </div>
        <div>
          <div className="clock-days">2 days</div>
          <div className="clock-hours">12 hours</div>
          <div className="clock-minutes">15 minutes</div>
          <div className="clock-seconds">28 seconds</div>
        </div>
        <div>
          <input placeholder="new date" onChange ={event => this.setState[{newDeadline: event.target.value}]}/>
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
      );
  }
}
 
export default CountdownTimer;
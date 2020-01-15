import React, { Component } from 'react';
import Clock from '../Clock/Clock'

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'January 25, 2020',
      newDeadline: ''
    }    
  }  

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }
  
  render() { 
    return ( 
      <div className="timer">
        <div className="timer-title">

          {/* Countdown to {this.state.deadline} */}

          Evaluation Deadline
        </div>

        <br/>

        <div>

       

          <Clock
          deadline = {this.state.deadline} />

          
        </div>        
 
       
      </div>
      );
  }
}
 
export default CountdownTimer;
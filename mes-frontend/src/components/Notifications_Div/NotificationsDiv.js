import React, { Component } from 'react';

class NotificationsDiv extends Component {
  state = {  }
  render() { 
    return (
      <div className="d-md-flex">
        <div className="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
          <div className="single-notification">
            You have an Evaluation Scheduled for 2, February, 2020.
          </div>
          <hr />          
        </div>
      </div>
    );
  }
}
 
export default NotificationsDiv;
import React, { Component } from 'react';

class NotificationsDiv extends Component {
  state = {  }
  render() { 
    return (
      <div className="d-md-flex">
        <div className="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
          <div className="single-notification">
            You have an Evaluation Scheduled for 23, January, 2020.
          </div>
          <hr />
          <div className="single-notification">
            This is an example of using <code>.overflow-auto</code> on an
            element with set width and height dimensions. By design, this
            content will vertically scroll.
          </div>
          <hr />
          <div className="single-notification">
            This is an example of using <code>.overflow-auto</code> on an
            element with set width and height dimensions. By design, this
            content will vertically scroll.
          </div>
          <hr />
          <div className="single-notification">
            This is an example of using <code>.overflow-auto</code> on an
            element with set width and height dimensions. By design, this
            content will vertically scroll.
          </div>
        </div>
      </div>
    );
  }
}
 
export default NotificationsDiv;
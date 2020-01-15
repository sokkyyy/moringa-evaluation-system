import React, { Component } from 'react';

class NotificationsDiv extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="d-md-flex">
      <div className="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">

        <div className="single-notification">
          <strong>This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By
          design, this content will vertically scroll.</strong>
         
        </div>
        <hr/>
        <div className="single-notification">
          This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By
          design, this content will vertically scroll.
      
        </div>
        <hr/>
        <div className="single-notification">
          This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By
          design, this content will vertically scroll.
       
        </div>
        <hr/>
        <div className="single-notification">
          This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By
          design, this content will vertically scroll.
          
        </div>
        <hr/>
 
       
      </div>     
    </div>

     );
  }
}
 
export default NotificationsDiv;
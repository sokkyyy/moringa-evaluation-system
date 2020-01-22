import React, { Component } from "react";

class Success extends Component {
  state = {};

  styles = {
    paddingTop:200
  };

  render() {
    return (
      <div className="text-center" style={this.styles}>
        <h4>Thank you for taking the Assessment.</h4>
        <h3> You can view your total ratings in your dashboard</h3>
      </div>
    );
  }
}

export default Success;

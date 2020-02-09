import React, { Component } from "react";

class Success extends Component {
  state = {};

  styles = {
    paddingTop:200
  };

  render() {
    return (
      <div className="text-center" style={this.styles}>
        <h4>Thank you for assessing your employee.</h4>
      </div>
    );
  }
}

export default Success;

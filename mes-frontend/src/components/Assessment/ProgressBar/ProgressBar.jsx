import React, { Component } from "react";
import "./ProgressBar.css";

class ProgressBar extends Component {
  state = {};
  
  styles = {
    paddingTop:20
  }

  render() {
    return (
      <form id="msform" >
        <ul id="progressbar">
          <li className="active">step 1</li>
          <li>step 2</li>
          <li>step 3</li>
          <li>step 4</li>
          <li>step 5</li>
          <li>step 6</li>
        </ul>
      </form>
    );
  }
}

export default ProgressBar;
// style={this.styles}
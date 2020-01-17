import React, { Component } from "react";

class ProgressBar extends Component {
  state = {};
  render() {
    return (
      <form id="msform">
        <ul id="progressbar">
          <li class="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </form>
    );
  }
}

export default ProgressBar;

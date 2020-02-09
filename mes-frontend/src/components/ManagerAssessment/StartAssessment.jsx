import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class StartAssessment extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  styles = {
    marginTop: 30,
    paddingTop: 30,
    paddingBottom: 30,
    marginLeft:500,

  };

  render() {
    return (
      <div className="" style={this.styles}>
        <Button onClick={this.saveAndContinue} className="next">
          Assess Staff
        </Button>
      </div>
    );
  }
}

export default StartAssessment;

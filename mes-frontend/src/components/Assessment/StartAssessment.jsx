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
    paddingBottom: 30
  };

  render() {
    return (
      <div className="text-center">
        <Button onClick={this.saveAndContinue} className="next">
          Take Assessment
        </Button>
      </div>
    );
  }
}

export default StartAssessment;
